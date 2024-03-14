import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from './config/env.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envConfig.host,
      port: envConfig.port,
      username: envConfig.username,
      password: envConfig.password,
      database: envConfig.database,
      // entities: ['src/**/**/*.entity{.ts}'],
      autoLoadEntities: true, // ? To automatically load entities
      synchronize: true, // ? it is unsafe to use for schema synchronization on production once you get data in your database
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
