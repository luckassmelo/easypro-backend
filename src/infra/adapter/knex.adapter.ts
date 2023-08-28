import Knex from 'knex';
import type { Knex as KnexApplication } from 'knex';
import { KnexConfigurationInterface } from '../config/config.interface';

export class KnexAdapter {
  private knexInstance: KnexApplication;

  constructor(databaseConnection: KnexConfigurationInterface) {
    this.knexInstance = Knex(databaseConnection);
    this.knexInstance.raw('select 1+1 as result')
      .then(() => console.info(`[KnexAdapter] Database connection with ${databaseConnection.connection.database}`))
      .catch((error: unknown) => {
        console.error(`[KnexAdapter] Database connection error with ${databaseConnection.connection.database}`, error);
        process.exit(1);
      });
  }

  getKnexInstance(): KnexApplication {
    return this.knexInstance;
  }

}
