import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patients')
export default class Patient {
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
  orgaoNecessitado: string;


  
}
  