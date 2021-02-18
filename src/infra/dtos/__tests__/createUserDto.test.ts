import { CreateUserDto } from "../createUserDto";

describe("Create User DTO", () => {
  it("should validate data when instantiated", async () => {
    expect(() => new CreateUserDto({})).toThrow();
    expect(() => new CreateUserDto({ name: "Axl" })).not.toThrow();
  });
});
