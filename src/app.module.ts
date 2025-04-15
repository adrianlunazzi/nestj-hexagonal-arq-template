import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './aplication/services/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './infrastructure/database/config/data-source';
import { DemoUseCases } from './aplication/use-case/demo.use-case';
import { DemoController } from './infrastructure/controllers/demo.controller';
import { PostgresDataServicesModule } from './infrastructure/database/framework/postgres/postgres.data-service.module';
import { DemoUseCasesModule } from './aplication/use-case/demo.use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => dataSourceOptions(configService),
    }),
    PostgresDataServicesModule,
    DemoUseCasesModule,
  ],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
