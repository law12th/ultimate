import DailyRotateFile, {
	DailyRotateFileTransportOptions,
} from "winston-daily-rotate-file";
import SlackHook, { SlackHookOptions } from "winston-slack-webhook-transport";
import {
	Console,
	ConsoleTransportInstance,
	ConsoleTransportOptions,
} from "winston/lib/winston/transports";

export const createConsoleTransport = (
	options: ConsoleTransportOptions
): ConsoleTransportInstance => {
	return new Console(options);
};

export const createFileTransport = (
	options: DailyRotateFileTransportOptions
): DailyRotateFile => {
	return new DailyRotateFile(options);
};

export const createSlackTransport = (options: SlackHookOptions): SlackHook => {
	return new SlackHook(options);
};
