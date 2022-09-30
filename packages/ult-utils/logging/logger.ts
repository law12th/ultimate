import { Colours, dateFormat, LoggingLevels, timeFormat } from "ult-constants";
import winston from "winston";
import getLoggerTransports from "./loggerTransports";
import { Transport } from "./transports";

const levels = {
	error: LoggingLevels.ERROR,
	warn: LoggingLevels.WARN,
	info: LoggingLevels.INFO,
	http: LoggingLevels.HTTP,
	debug: LoggingLevels.DEBUG,
};

const colours = {
	error: Colours.RED,
	warn: Colours.YELLOW,
	info: Colours.BLUE,
	http: Colours.MAGENTA,
	debug: Colours.WHITE,
};

winston.addColors(colours);

const format = winston.format.combine(
	winston.format.timestamp({ format: `${dateFormat} ${timeFormat}` }),
	winston.format.colorize({ all: true }),
	winston.format.printf(
		(info) => `${info.timestamp} ${info.level}: ${info.message}`
	)
);

const createLogger = (transports: Transport[]): winston.Logger => {
	return winston.createLogger({
		transports: getLoggerTransports(transports),
		levels,
		format,
	});
};

export default createLogger;
