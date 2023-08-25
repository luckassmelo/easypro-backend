import { KnexAdapter } from '../../../../infra/adapter/knex.adapter';
import { LoginRepositoryInterface } from './login.interface';
import { UserType } from './login.type';


export class LoginRepository implements LoginRepositoryInterface {
  constructor(private knexAdapter: KnexAdapter) { }

  async authenticate(username: string, password: string): Promise<UserType> {
    const knex = this.knexAdapter.getKnexInstance();

    const user = await knex<UserType>('users.tbl_users')
      .where('users.tbl_users.windows_user', username)
      .where('users.tbl_users.login_pwd', password);
    return user[0];
  }

}
