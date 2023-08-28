export interface HttpServerInterface {
  // eslint-disable-next-line @typescript-eslint/ban-types
  on(method: string, url: string, callback: Function): void;
  listen(port: number): void;
}
