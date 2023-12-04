import { UsersService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Usuario } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService:UsersService){}

  @Get()
  getUsers(): Promise<Usuario[]>{
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() newUser:CreateUserDto):Promise<Usuario> {
    return this.usersService.createUser(newUser);
  }
}
