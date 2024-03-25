import { DataSource, DataSourceOptions } from 'typeorm';
import { envConfig } from './env.config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: envConfig.host,
  port: envConfig.port,
  username: envConfig.username,
  password: envConfig.password,
  database: envConfig.database,
  entities: ['dist/**/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'], // ?  list of migrations that need to be loaded by TypeORM
  migrationsTableName: 'migrations', // ? table name for migrations
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
