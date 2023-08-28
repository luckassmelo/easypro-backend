import { appConfiguration } from '../../../../infra/config/config';
import { knexAdapterForPPB } from '../../../../infra/database/connections.database';
import { LoginAdapter } from './login.adapter';
import { LoginController } from './login.controller';
import { LoginRepository } from './login.repository';
import { LoginUseCase } from './login.usecase';

const repository = new LoginRepository(knexAdapterForPPB);
const adapter = new LoginAdapter(appConfiguration.secretKeyForProduction);
const usecase = new LoginUseCase(repository, adapter);
const loginController = new LoginController(usecase);


export { loginController }
