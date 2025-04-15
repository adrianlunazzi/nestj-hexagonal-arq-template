import { BaseDataServices } from 'src/domain/ports/base.data-service';
import { DemoFactoryService } from './demo.factory.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoUseCases {
  constructor(
    private dataService: BaseDataServices,
    private demoFactory: DemoFactoryService,
  ) {}

  async getDemos() {
    return await this.dataService.demo.getAll();
  }
}
