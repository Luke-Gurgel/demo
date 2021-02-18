import { CreateUserDtoInterface } from "../dtos/createUserDto";

export interface UserRepository {
  create: (dto: CreateUserDtoInterface) => Promise<boolean>;
}
