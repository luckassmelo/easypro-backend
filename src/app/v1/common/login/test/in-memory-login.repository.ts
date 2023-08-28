import { LoginRepositoryInterface } from '../login.interface';
import { UserType } from '../login.type';
import { usersMock } from './users.mock';


export class InMemoryLoginRepository implements LoginRepositoryInterface {
  public users: UserType[] = usersMock;

  authenticate(username: string, password: string): Promise<UserType> {
    return new Promise((resolve) => {
      const user = this.users.find(u => u.login_user === username && u.login_pwd === password);
      resolve(user);
    });
  }

}
