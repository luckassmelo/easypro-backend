

export class LoginModel {
  private _username: string;
  private _password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  set username(username: string) {
    if (!isNaN(Number(username)) || username.length <= 3) {
      throw new Error('Username must be longer than 3 characters and cannot consist of only numbers.');
    }
    this._username = username;
  }

  set password(password: string) {
    if (!isNaN(Number(password)) || password.length <= 3) {
      throw new Error('Password must be longer than 3 characters and cannot consist of only numbers.');
    }
    this._password = password;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
}
