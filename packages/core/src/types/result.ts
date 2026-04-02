/* eslint-disable perfectionist/sort-object-types */

import type { CustomError } from "@/error/types";

export type Failure = { success: false; error: CustomError[] };
export type Success = { success: true; data: unknown };

export type Result = Failure | Success;
