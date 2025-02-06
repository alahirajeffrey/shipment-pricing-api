import cors from "cors";
import express from "express";
import { rateLimiter } from "./common";
import helmet from "helmet";
import { router } from "./routes";

const app = express();

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(rateLimiter);
app.use(express.json());

app.use(router);

export default app;
