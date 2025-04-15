import { Injectable } from '@nestjs/common';
import { DemoDto } from 'src/aplication/dtos';
import { Demo } from 'src/domain/entities';

@Injectable()
export class DemoFactoryService {
  createNewDemo(demoDto: DemoDto) {
    const newDemo = new Demo();
    newDemo.name = demoDto.name;
    return newDemo;
  }
}
