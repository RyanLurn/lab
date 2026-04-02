export interface CustomError {
  context?: Record<string, unknown>;
  message: string;
  code: string;
}
