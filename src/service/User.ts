import { hash } from 'bcrypt'
import { userRepository } from '../repositories/userRepository'
import { IMessageResponse } from '../shared/types/IMessage'
import { AppError } from '../utils/error/AppError'

interface IUserCreateRequest {
  nickname: string
  password: string
  email: string
}

interface IUserCreateResponse extends IMessageResponse {
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
