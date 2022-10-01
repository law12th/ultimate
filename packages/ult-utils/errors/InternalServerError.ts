import { HttpStatusCodes } from "ult-constants";
import { CustomError } from "./CustomError";

export class InternalSeverError extends CustomError {
	statusCode = HttpStatusCodes.STATUS500INTERNAL_SERVER_ERROR;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, InternalSeverError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
