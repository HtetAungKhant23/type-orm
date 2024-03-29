import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
};
