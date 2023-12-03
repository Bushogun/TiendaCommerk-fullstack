import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  logIn(): string {
    return "Has ingresado"
  }

  @Post()
  createUser(@Body() product): string {
    return "Crear usuario"
  }

}
