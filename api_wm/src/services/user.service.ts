import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { createUserDto } from '../dto/create_user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: createUserDto) {
    const newUser = this._userRepository.create(user);
    return this._userRepository.save(newUser);
  }

  getUsers() {
    return this._userRepository.find();
  }
}
