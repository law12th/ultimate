import { logger } from "ult-utils";
import app from "./app";
import config from "./config";

app.listen(config.PORT, () => {
	logger.info(`server listening on port ${config.PORT}`);
})
	.on("error", (err) => {
		logger.error(`server exited with error: ${err}`);
	})
	.on("close", () => {
		logger.error("server exited without error");
	});
