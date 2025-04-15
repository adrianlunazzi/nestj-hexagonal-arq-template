import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from '../entities';
import { DataSource } from 'typeorm';
import { PostgresDataServices } from './postgres.data-service.service';
import { BaseDataServices } from 'src/domain/ports/base.data-service';
import { Module } from '@nestjs/common';
import { dataSourceOptions } from '../../config/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Demo]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => dataSourceOptions(configService),
    }),
  ],
  providers: [
    {
      provide: BaseDataServices,
      useClass: PostgresDataServices,
    },
  ],
  exports: [BaseDataServices],
})
export class PostgresDataServicesModule {}
