import { UserRepository } from "./types";
import { CreateUserDtoInterface } from "../dtos/createUserDto";

export class MongoUserRepository implements UserRepository {
  async create(dto: CreateUserDtoInterface): Promise<boolean> {
    // use the DTO to create the User however you want.
    return new Promise((resolve) => resolve(true));
  }
}
