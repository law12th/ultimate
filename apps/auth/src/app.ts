import compression from "compression";
import express from "express";
import { errorHandler, NotFoundError } from "ult-utils";

const app = express();

app.use(express.json());
app.use(compression());

app.all("*", async (_req, _res) => {
	throw new NotFoundError("route not found");
});

app.use(errorHandler);

export default app;
