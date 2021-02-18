import { UserRepository } from "./types";
import mysql, { ConnectionConfig } from "mysql";
import { CreateUserDtoInterface } from "../dtos/createUserDto";

export class MySqlUserRepository implements UserRepository {
  private readonly config: ConnectionConfig = {
    host: "db",
    user: "root",
    password: "pass",
    database: "onmdb",
  };

  async create(dto: CreateUserDtoInterface): Promise<boolean> {
    // use the DTO (which has been validated)
    // to create the User however you want.
    const conn = mysql.createConnection(this.config);
    const sql = `INSERT INTO users(name) values('${dto.name}')`;
    conn.query(sql);
    conn.end();

    return new Promise((resolve) => resolve(true));
  }
}
