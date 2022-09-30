import DailyRotateFile from "winston-daily-rotate-file";
import SlackHook from "winston-slack-webhook-transport";
import {
	createConsoleTransport,
	createFileTransport,
	createSlackTransport,
} from "../transportCreators";
import { Transport } from "../transports";
import { TransportType } from "../transportTypes";

const getLoggerTransports = (
	transports: Transport[]
): Array<DailyRotateFile | SlackHook> => {
	return transports.map(({ type, options }) => {
		switch (type) {
			case TransportType.Console:
				return createConsoleTransport(options);
			case TransportType.File:
				return createFileTransport(options);
			case TransportType.Slack:
				return createSlackTransport(options);
		}
	});
};

export default getLoggerTransports;
