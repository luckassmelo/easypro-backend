import { appConfiguration } from '../../../../../infra/config/config';
import { LoginAdapter } from '../login.adapter';
import { LoginController } from '../login.controller';
import { LoginUseCase } from '../login.usecase';
import { InMemoryLoginRepository } from './in-memory-login.repository';


describe('LoginFeature', () => {
  const repository = new InMemoryLoginRepository();
  const jwtAdapter = new LoginAdapter(appConfiguration.secretKeyForDevelopment);
  const useCase = new LoginUseCase(repository, jwtAdapter);
  const controller = new LoginController(useCase);

  test('Should be authenticate', async () => {
    const response = await controller.handle({ username: 'user1', password: 'password1' });
    expect(response.length).toBeGreaterThan(100);
  });

  test('Should be throws Unauthorized Error', async () => {
    try {
      await controller.handle({ username: 'user123', password: 'password1' });
    } catch (error) {
      expect(error.message).toBe('You do not have the necessary permissions to log in or username or password are incorrect.');
    }
  });

  test('Should be throws Username Error', async () => {
    try {
      await controller.handle({ username: '123', password: 'password1' });
    } catch (error) {
      expect(error.message).toBe('Username must be longer than 3 characters and cannot consist of only numbers.');
    }
  });

  test('Should be throws Password Error', async () => {
    try {
      await controller.handle({ username: 'user1', password: '123' });
    } catch (error) {
      expect(error.message).toBe('Password must be longer than 3 characters and cannot consist of only numbers.');
    }
  });
});
