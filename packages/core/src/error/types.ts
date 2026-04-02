/* eslint-disable perfectionist/sort-interfaces */
import type { ErrorObject } from "serialize-error";

import type { SerializedUnknown } from "@/utils/serialize-unknown";

export interface CustomError {
  code: string;
  message: string;
  cause?: SerializedUnknown | ErrorObject;
  context?: Record<string, unknown>;
}

export interface UnexpectedError extends CustomError {
  code: "UNEXPECTED_ERROR";
  cause: ErrorObject;
}

export interface UnknownError extends CustomError {
  code: "UNKNOWN_ERROR";
  cause: SerializedUnknown;
}

export type { ErrorObject };
