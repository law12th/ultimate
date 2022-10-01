import { HttpStatusCodes } from "ult-constants";
import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
	statusCode = HttpStatusCodes.STATUS404NOT_FOUND;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, NotFoundError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
