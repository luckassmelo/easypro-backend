import "dotenv/config";
import { ConfigInterface } from './config.interface';


export const appConfiguration: ConfigInterface = {
  nodePort: <number>Number(<string>process.env.NODE_PORT) || 3036,
  devMode: <boolean>(process.env.NODE_ENV !== 'production' || false),
  knexConfigurationForPPB: {
    client: 'pg',
    connection: {
      database: <string>process.env.EASYPRO_DATABASE || 'easypro_test',
      host: <string>process.env.EASYPRO_HOST || 'localhost',
      password: <string>process.env.EASYPRO_PASSWORD || 'easypro_test',
      port: <number>Number(<string>process.env.EASYPRO_PORT) || 3062,
      user: <string>process.env.EASYPRO_USERNAME || 'easypro_test',
    },
    pool: {
      min: 1,
      max: 10
    },
    debug: <boolean>(process.env.KNEX_DEBUG === 'true' || false),
    acquireConnectionTimeout: 5000
  },
  secretKeyForProduction: <string>(process.env.SECRET_KEY_PRODUCTION || '123'),
  secretKeyForDevelopment: <string>(process.env.SECRET_KEY_DEVELOPMENT || '123')
}
