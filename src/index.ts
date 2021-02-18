import express from "express";
import { rootRouter } from "./app/routes";

const port = 3000;
const app = express();
app.use(rootRouter);

app.get("/", (_, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => console.log("demo server listening on port", port));
