import { Pool } from "pg";
import config from "./envConfig";
import { Logger } from "ult-utils";

let logger = Logger.getLogger();

const pool = new Pool({
	host: config.DB_HOST,
	user: config.DB_USER,
	database: config.DB_NAME,
	password: config.DB_PASSWORD,
	port: config.DB_PORT,
});

const connectToDB = async () => {
	try {
		await pool.connect();
		logger.info(`database successfully connected`);
	} catch (err) {
		logger.error(`database failed to connect: ${err}`);
	}
};

export default connectToDB;
