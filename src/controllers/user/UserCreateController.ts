import { Request, Response } from 'express'
import { userRepository } from '../../repositories/userRepository'
import { hash } from 'bcrypt'

class UserCreateController {
  async handle(req: Request, res: Response) {
    const { nickname, password, email } = req.body

    try {
      const nicknameAlreadyExists = await userRepository.findOne({
        where: { nickname },
      })

      if (nicknameAlreadyExists)
        return res.status(400).json({ message: 'Nickname already exists' })

      const passwordHash = await hash(password, 8)

      const newUser = userRepository.create({
        nickname: nickname,
        password: passwordHash,
        email: email,
      })

      await userRepository.save(newUser)
      return res.status(201).json({
        message: 'User created successfully',
        user: {
          id: newUser.id,
          nickname: newUser.nickname,
          email: newUser.email,
        },
      })
    } catch (error) {
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }
}

export { UserCreateController }
