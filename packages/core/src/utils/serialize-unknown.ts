export function serializeUnknown(data: unknown): {
  value: unknown;
  type: string;
} {
  // Null / undefined
  if (data === null || data === undefined) {
    return { value: String(data), type: "nullish" };
  }

  // Primitive (string, number, boolean, bigint, symbol)
  if (typeof data !== "object" && typeof data !== "function") {
    return {
      value: typeof data === "symbol" ? data.toString() : data,
      type: typeof data,
    };
  }

  // Plain object or anything else — attempt structured serialization
  try {
    return {
      value: JSON.parse(JSON.stringify(data)),
      type: "object",
    };
  } catch {
    // Circular references, non-serializable values, etc.
    return {
      type: "unserializable",
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      value: String(data),
    };
  }
}
