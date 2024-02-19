import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';
import { createUserDto } from '../dto/create_user.dto';

@Controller('user')
export class UserController {
  constructor(private _UserService: UserService) {}

  @Get()
  getUsers(): Promise<UserEntity[]> {
    return this._UserService.getUsers();
  }

  @Post()
  createUser(@Body() newUser: createUserDto): Promise<UserEntity> {
    // es asíncrono, así que debe haber un return
    return this._UserService.createUser(newUser);
  }
}
