import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Demo } from '../framework/entities';

dotenv.config();

export const dataSourceOptions = (configService: ConfigService): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST,
  port: parseInt(process.env.POSTGRES_DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [Demo],
  synchronize: true,
});

export const createDataSource = (configService: ConfigService) => {
  const options = dataSourceOptions(configService);
  return new DataSource(options);
};
