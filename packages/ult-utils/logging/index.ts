import transports from "./transportConfig";
import createLogger from "./logger";
import winston from "winston";
export class Logger {
	private static logger: winston.Logger;

	static getLogger(): winston.Logger {
		if (!Logger.logger) {
			Logger.logger = createLogger(transports);
		}

		return Logger.logger;
	}
}
