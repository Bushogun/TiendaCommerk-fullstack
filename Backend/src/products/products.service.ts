import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Producto } from './product.entity'
import { Repository } from "typeorm";
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductService{

  constructor(@InjectRepository (Producto) private userRepository: Repository<Producto>){}

    getProducts(){
      return this.userRepository.find()
    }

    createProduct(producto: CreateProductDto){
      const newProduct = this.userRepository.create(producto)
      return this.userRepository.save(newProduct)
    }
}
