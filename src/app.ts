import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

const app: Application = express();
app.use(helmet());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", router);
app.listen(port, () => {
  console.log(
    `==> start listening *** port: #${port} *** node_env: ${nodeEnv} *** environment: ${environment}`
  );
});
