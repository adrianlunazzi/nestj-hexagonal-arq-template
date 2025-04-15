import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Demo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
