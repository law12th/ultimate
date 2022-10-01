/* eslint-disable turbo/no-undeclared-env-vars */
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface ENV {
	NODE_ENV: string | undefined;
	PORT: number | undefined;
}

interface Config {
	NODE_ENV: string;
	PORT: number;
}

const getConfig = (): ENV => {
	return {
		NODE_ENV: process.env.NODE_ENV,
		PORT: process.env.PORT,
	};
};

const getSanitizedConfig = (config: ENV): Config => {
	for (const [key, value] of Object.entries(config)) {
		if (value === undefined) {
			throw new Error(`missing key ${key} in .env file`);
		}
	}
	return config as Config;
};

const config = getSanitizedConfig(getConfig());

export default config;
