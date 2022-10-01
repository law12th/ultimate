import { HttpStatusCodes } from "ult-constants";
import { CustomError } from "./CustomError";

export class Unauthorized extends CustomError {
	statusCode = HttpStatusCodes.STATUS401UNAUTHORIZED;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, Unauthorized.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
