import type { ErrorObject } from "serialize-error";

import type { SerializedUnknown } from "@/utils/serialize-unknown";

export interface UnexpectedError extends CustomError {
  context: {
    cause: ErrorObject;
  };
  code: "UNEXPECTED_ERROR";
}

export interface UnknownError extends CustomError {
  context: {
    cause: SerializedUnknown;
  };
  code: "UNKNOWN_ERROR";
}

export interface CustomError {
  context?: Record<string, unknown>;
  message: string;
  code: string;
}
