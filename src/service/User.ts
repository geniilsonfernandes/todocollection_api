import { hash } from 'bcrypt'
import { userRepository } from '../repositories/userRepository'
import { AppError } from '../utils/error/AppError'

interface IUserCreateRequest {
  nickname: string
  password: string
  email: string
}

interface IUserCreateResponse {
  message: string
  user: {
    id: string
    nickname: string
    email: string
  }
}

class UserService {
  public async CreateUser({
    email,
    nickname,
    password,
  }: IUserCreateRequest): Promise<IUserCreateResponse> {
    const nicknameAlreadyExists = await userRepository.findOne({
      where: { nickname },
    })

    const nicknameAlowed = nickname.length >= 3 && nickname.length <= 20
    const EmailMatch = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
    const passwordAlowed = password.length >= 6 && password.length <= 20

    if (!passwordAlowed) {
      throw new AppError('Password must be between 6 and 20 characters', 400)
    }

    if (!EmailMatch) {
      throw new AppError('Invalid email', 400)
    }

    if (!nicknameAlowed) {
      throw new AppError('Nickname must be between 3 and 20 characters', 400)
    }

    if (nicknameAlreadyExists) {
      throw new AppError('Nickname already exists', 400)
    }

    const passwordHash = await hash(password, 8)

    const newUser = userRepository.create({
      nickname: nickname,
      password: passwordHash,
      email: email,
    })

    await userRepository.save(newUser)
    return {
      message: 'User created successfully',
      user: {
        id: newUser.id,
        nickname: newUser.nickname,
        email: newUser.email,
      },
    }
  }
}

export { UserService }
