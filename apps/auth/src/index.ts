import { Logger } from "ult-utils";
import app from "./app";
import { config, connectToDB } from "./config";

let logger = Logger.getLogger();

connectToDB();

app.listen(config.PORT, () => {
	logger.info(`app listening on port ${config.PORT}`);
})
	.on("error", (err) => {
		logger.error(`app exited with error: ${err}`);
	})
	.on("close", () => {
		logger.info("app successfully exited");
	});
