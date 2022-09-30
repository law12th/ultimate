import morgan, { StreamOptions } from "morgan";
import logger from ".";

const messageFormat =
	":method :url :status :res[content-length] - :response-time ms";

// let morgan use our custom logger rather than the default process.stdout i.e console.log
const stream: StreamOptions = {
	write: (message) => logger.http(message),
};

const morganMiddleware = morgan(messageFormat, { stream });

export default morganMiddleware;
