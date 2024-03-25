import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// ? Entity is a class that maps to a database table (or collection when using MongoDB).
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  first_name: string;

  @Column('text')
  last_name: string;

  @Column('text')
  phone: string;

  @Column('text')
  email: string;
}
