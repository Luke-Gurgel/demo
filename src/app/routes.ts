import { Router } from "express";
import { createUser } from "./createUser";
import { buildUserRepository, RepositoryType } from "../infra/factories/buildUserRepository";

const rootRouter = Router();
const userRepo = buildUserRepository(RepositoryType.MY_SQL);

rootRouter.post("/users", (req, res) => createUser(req, res, userRepo));

export { rootRouter };
