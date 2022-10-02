import { dateFormat } from "ult-constants";
import { Transport } from "../transports";
import { TransportType } from "../transportTypes";

const transports: Transport[] = [
	{
		type: TransportType.Console,
		options: {},
	},
	{
		type: TransportType.File,
		options: {
			filename: "error-%DATE%.log",
			dirname: "./.logs",
			level: "error",
			datePattern: dateFormat,
		},
	},
	{
		type: TransportType.File,
		options: {
			filename: "all-%DATE%.log",
			dirname: "./.logs",
			level: "all",
			datePattern: dateFormat,
		},
	},
];

export default transports;
