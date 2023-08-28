import { KnexAdapter } from '../adapter/knex.adapter';
import { appConfiguration } from '../config/config';

const knexAdapterForPPB = new KnexAdapter(appConfiguration.knexConfigurationForPPB);

export {
  knexAdapterForPPB
}
