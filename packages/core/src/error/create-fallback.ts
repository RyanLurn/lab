import { serializeError } from "serialize-error";

import type { UnexpectedError, UnknownError } from "@/error/types";

import { serializeUnknown } from "@/utils/serialize-unknown";

export type FallbackError = UnexpectedError | UnknownError;

export function createFallbackError({
  message,
  context,
  error,
}: Omit<FallbackError, "cause" | "code"> & { error: unknown }): FallbackError {
  const code: FallbackError["code"] =
    error instanceof Error ? "UNEXPECTED_ERROR" : "UNKNOWN_ERROR";

  if (code === "UNEXPECTED_ERROR") {
    return {
      cause: serializeError(error),
      message,
      context,
      code,
    };
  }

  return {
    cause: serializeUnknown(error),
    message,
    context,
    code,
  };
}
