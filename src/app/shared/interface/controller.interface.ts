export interface ControllerInterface {
  handle(props?: unknown): Promise<unknown>
}
