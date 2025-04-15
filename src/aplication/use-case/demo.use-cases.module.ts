import { Module } from '@nestjs/common';
import { DemoFactoryService } from './demo.factory.service';
import { DemoUseCases } from './demo.use-case';
import { PostgresDataServicesModule } from 'src/infrastructure/database/framework/postgres/postgres.data-service.module';

@Module({
  imports: [PostgresDataServicesModule],
  providers: [DemoFactoryService, DemoUseCases],
  exports: [DemoFactoryService, DemoUseCases],
})
export class DemoUseCasesModule {}
