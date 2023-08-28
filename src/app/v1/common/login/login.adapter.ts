import { LoginAdapterInterface } from './login.interface';
import { UserType } from './login.type';
import jwt from 'jsonwebtoken';

export class LoginAdapter implements LoginAdapterInterface {
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  generateToken(user: UserType): string {
    const token = jwt.sign({ userId: user.id }, this.secretKey, { expiresIn: '1h' });
    return token;
  }
}
