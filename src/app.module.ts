import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from './config/env.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envConfig.host,
      port: envConfig.port,
      username: envConfig.username,
      password: envConfig.password,
      database: envConfig.database,
      entities: ['src/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
