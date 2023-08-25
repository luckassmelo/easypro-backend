import { GenericError } from './generic.error';

export class UnauthorizedError extends GenericError {
  constructor() {
    super('UnauthorizedError', 'You do not have the necessary permissions to log in or username or password are incorrect.', 401);
  }
}
