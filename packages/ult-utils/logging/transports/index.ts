import { DailyRotateFileTransportOptions } from "winston-daily-rotate-file";
import { SlackHookOptions } from "winston-slack-webhook-transport";
import { ConsoleTransportOptions } from "winston/lib/winston/transports";
import { TransportType } from "../transportTypes";

interface ConsoleTransport {
	type: TransportType.Console;
	options: ConsoleTransportOptions;
}

interface FileTransport {
	type: TransportType.File;
	options: DailyRotateFileTransportOptions;
}

interface SlackTransport {
	type: TransportType.Slack;
	options: SlackHookOptions;
}

export type Transport = ConsoleTransport | FileTransport | SlackTransport;
