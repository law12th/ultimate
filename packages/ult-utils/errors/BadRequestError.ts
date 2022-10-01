import { HttpStatusCodes } from "ult-constants";
import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
	statusCode = HttpStatusCodes.STATUS400BAD_REQUEST;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, BadRequestError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
