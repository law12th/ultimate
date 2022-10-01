import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "ult-constants";
import { CustomError } from "../errors/CustomError";

export const errorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).send({ errors: err.serializeErrors() });
	}

	res.status(HttpStatusCodes.STATUS400BAD_REQUEST).send({
		errors: [{ message: "something went wrong" }],
	});
};
