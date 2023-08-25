export interface MiddlewareInterface {
  execute: (...args: unknown[]) => unknown;
}
