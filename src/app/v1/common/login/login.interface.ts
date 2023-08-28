import { UserType } from './login.type';

export interface LoginRepositoryInterface {
  authenticate(username: string, password: string): Promise<UserType>;
}

export interface LoginAdapterInterface {
  generateToken(user: UserType): string;
}
