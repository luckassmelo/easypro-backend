
export interface ConfigInterface {
  nodePort: number;
  devMode: boolean;
  secretKeyForProduction: string;
  secretKeyForDevelopment: string;
  knexConfigurationForPPB: KnexConfigurationInterface;
}

export interface KnexConfigurationInterface {
  client: string;
  connection: Record<string, unknown>;
  pool: Record<string, unknown>;
  debug?: boolean;
  acquireConnectionTimeout?: number;
}
