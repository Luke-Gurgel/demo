import { UserRepository } from "../repos/types";
import { MySqlUserRepository } from "../repos/mysqlUserRepository";
import { InMemoryUserRepository } from "../repos/inMemoryUserRepository";
import { MongoUserRepository } from "../repos/mongoUserRepository";

export enum RepositoryType {
  MONGO,
  MY_SQL,
  IN_MEMORY,
}

export const buildUserRepository = (repoType: RepositoryType): UserRepository => {
  switch (repoType) {
    case RepositoryType.MY_SQL:
      return new MySqlUserRepository();
    case RepositoryType.IN_MEMORY:
      return new InMemoryUserRepository();
    case RepositoryType.MONGO:
      return new MongoUserRepository();
  }
};
