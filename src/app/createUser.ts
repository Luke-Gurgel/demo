import { UserRepository } from "../infra/repos/types";
import { Request, Response } from "express";
import { CreateUserDto } from "../infra/dtos/createUserDto";

export const createUser = async (req: Request, res: Response, userRepo: UserRepository) => {
  const { body: userData } = req;

  // do application related stuff
  // log, dispatch events, etc

  try {
    const createUserDto = new CreateUserDto(userData); // validates itself when instantiated
    const success = await userRepo.create(createUserDto.toJson());
    return res.status(201).json({ success });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
