import { Module } from '@nestjs/common';
import { PostgresDataServicesModule } from './postgres.data-service.module';

@Module({
  imports: [PostgresDataServicesModule],
  exports: [PostgresDataServicesModule],
})
export class DBModule {}
