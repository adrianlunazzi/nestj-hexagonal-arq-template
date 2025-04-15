import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DemoUseCases } from 'src/aplication/use-case/demo.use-case';

@ApiTags('Demo')
@Controller('demo')
export class DemoController {
  constructor(private readonly demo: DemoUseCases) {}

  @Get()
  async getDemos() {
    return this.demo.getDemos();
  }
}

