import { ControllerInterface } from '../../../shared/interface/controller.interface';
import { LoginModel } from './login.model';
import { LoginUseCase } from './login.usecase';

type LoginProps = {
  username: string;
  password: string;
}

export class LoginController implements ControllerInterface {
  constructor(private usecase: LoginUseCase) { }

  async handle(props: LoginProps): Promise<string> {
    const loginModel = new LoginModel(props.username, props.password);
    return await this.usecase.execute(loginModel);
  }

}
