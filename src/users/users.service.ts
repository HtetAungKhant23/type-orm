import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    // ? The @InjectRepository() decorator is used to inject the User repository into the UsersService.
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(data: CreateUserDto): Promise<User> {
    return this.userRepository.save(data);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    const updatedUser = Object.assign(user, data);
    return this.userRepository.save(updatedUser);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete({ id });
  }
}
