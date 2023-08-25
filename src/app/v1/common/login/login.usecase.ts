import { UnauthorizedError } from '../../../shared/error/unauthorized.error';
import { UseCaseInterface } from '../../../shared/interface/usecase.interface';
import { LoginAdapterInterface, LoginRepositoryInterface } from './login.interface';
import { LoginModel } from './login.model';
import { UserType } from './login.type';

export class LoginUseCase implements UseCaseInterface {
  constructor(private repository: LoginRepositoryInterface, private adapter: LoginAdapterInterface) { }

  async execute(login: LoginModel): Promise<string> {
    const user = <UserType>await this.repository.authenticate(login.username, login.password);
    if (user === undefined || user === null) throw new UnauthorizedError();

    return this.adapter.generateToken(user);
  }
}
