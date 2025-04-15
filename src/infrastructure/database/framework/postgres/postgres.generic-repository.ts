import { BaseRepository } from 'src/domain/ports/base.repository';
import { DeleteResult, ObjectLiteral, Repository, UpdateResult } from 'typeorm';

export class PostgresGenericRepository<T extends ObjectLiteral> implements BaseRepository<T> {
  private repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  getAll(): Promise<T[]> {
    return this.repository.find();
  }

  get(id: string | number): Promise<T | null> {
    return this.repository.findOne({ where: { id } as any });
  }

  create(item: T): Promise<T> {
    return this.repository.save(item);
  }

  update(id: string | number, item: Partial<T>): Promise<UpdateResult> {
    return this.repository.update(id, item);
  }

  delete(id: string | number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
