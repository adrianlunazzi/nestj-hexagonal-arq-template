import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PostgresGenericRepository } from './postgres.generic-repository';
import { BaseDataServices } from 'src/domain/ports/base.data-service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Demo } from '../entities';

@Injectable()
export class PostgresDataServices implements BaseDataServices, OnApplicationBootstrap {
  demo: PostgresGenericRepository<Demo>;

  constructor(
    @InjectRepository(Demo)
    private DemoRepository: Repository<Demo>,
  ) {}

  onApplicationBootstrap() {
    this.demo = new PostgresGenericRepository<Demo>(this.DemoRepository);
  }
}
