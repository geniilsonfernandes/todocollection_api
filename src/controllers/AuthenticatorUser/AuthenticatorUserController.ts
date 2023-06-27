import { Request, Response } from 'express'
import { userRepository } from '../../repositories/userRepository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

class AuthenticatorUserController {
  async handle(request: Request, response: Response) {
    const { nickname, password } = request.body

    const user = await userRepository.findOne({ where: { nickname } })

    if (!user) {
      return response.status(400).json({ message: 'User not found' })
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return response.status(401).json({ message: 'Incorrect password' })
    }

    const token = sign(
      {
        email: user.email,
      },
      '43425213',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )

    return response.json({
      token,
    })
  }
}

export { AuthenticatorUserController }
