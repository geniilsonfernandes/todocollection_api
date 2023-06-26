import { AppDataSource } from "../data-source";
import { Users } from "../entities/Users";

const userRepository = AppDataSource.getRepository(Users);

export { userRepository };
