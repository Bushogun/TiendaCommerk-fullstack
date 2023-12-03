import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers:[UsersController],
  providers:[UsersService]
})
export class UsersModule{}
