export interface CreateUserDtoInterface {
  name?: string;
}

export class CreateUserDto implements CreateUserDtoInterface {
  readonly name?: string;

  constructor(dto: CreateUserDtoInterface) {
    this.name = dto.name;
    this.validate();
  }

  toJson() {
    return { name: this.name };
  }

  private validate() {
    this.validateName();
    // validate other stuff...
  }

  private validateName() {
    if (!this.name) throw Error("name cannot be empty");
  }
}
