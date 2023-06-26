import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import { AppDataSource } from "../data-source";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const newUser = userRepository.create({
        name: "genilson",
        password: "123456",
      });

      await userRepository.save(newUser);

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
}
