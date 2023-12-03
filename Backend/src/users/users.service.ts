import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from './user.entity'
import { Repository } from "typeorm";
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService{

  constructor(@InjectRepository (Usuario) private userRepository: Repository<Usuario>){}

    getUsers(){
      return this.userRepository.find()
    }

    createUser(usuario: CreateUserDto){
      const newUser = this.userRepository.create(usuario)
      return this.userRepository.save(newUser)
    }
}
