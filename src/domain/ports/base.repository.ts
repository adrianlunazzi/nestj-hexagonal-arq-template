import { DeleteResult, UpdateResult } from 'typeorm';

export abstract class BaseRepository<T> {
  abstract get(id: string | number): Promise<T | null>;
  abstract getAll(): Promise<T[]>;
  abstract create(item: T): Promise<T>;
  abstract update(id: string | number, item: Partial<T>): Promise<UpdateResult>;
  abstract delete(id: string | number): Promise<DeleteResult>;
}
