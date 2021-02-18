import { CreateUserDto } from "../../dtos/createUserDto";
import { MySqlUserRepository } from "../mysqlUserRepository";

describe("MySql User Repository", () => {
  it("it should persist 1 new record in the users table", async () => {
    const userRepo = new MySqlUserRepository();
    const dto = new CreateUserDto({ name: "Axl" });
    expect(() => userRepo.create(dto.toJson())).not.toThrow();
    // test that the record was created
    // test that only a single record was created
    // etc...
  });
});
