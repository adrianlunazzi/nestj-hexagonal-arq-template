import { Demo } from '../entities';
import { BaseRepository } from './base.repository';

export abstract class BaseDataServices {
  abstract demo: BaseRepository<Demo>;
}
