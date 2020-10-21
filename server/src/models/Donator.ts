import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('donators')
export default class Donator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: number;

  @Column()
  rg: number;

  @Column()
  email: string;

  @Column()
  smoker: boolean;

  @Column()
  genre: string;

  @Column()
  emailRelative: string;

  @Column()
  disease: string;
  
}
