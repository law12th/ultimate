import transports from "./transportConfig";
import createLogger from "./logger";

const logger = createLogger(transports);

export default logger;
