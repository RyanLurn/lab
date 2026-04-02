import { serializeError } from "serialize-error";

import { serializeUnknown } from "@/utils/serialize-unknown";

export function serializeUnknownError(error: unknown) {
  const serializedError =
    error instanceof Error ? serializeError(error) : serializeUnknown(error);

  return serializedError;
}
