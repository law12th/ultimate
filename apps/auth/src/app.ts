import compression from "compression";
import express from "express";
import { errorHandler, NotFoundError, morganMiddleware } from "ult-utils";

const app = express();

app.use(express.json());
app.use(compression());

app.all("*", async (_req, _res) => {
	throw new NotFoundError("route not found");
});

app.use(errorHandler);

app.use(morganMiddleware);

export default app;
