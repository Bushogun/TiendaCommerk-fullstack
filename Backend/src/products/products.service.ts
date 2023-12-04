import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Producto } from './product.entity'
import { Repository } from "typeorm";
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductService{
  constructor(@InjectRepository (Producto) private productRepository: Repository<Producto>){}

    getProducts(){
      return this.productRepository.find()
    }

    async findByName(productName: string): Promise<Producto | undefined> {
      const product = await this.productRepository.findOne({ where: { NombreProducto: productName } });
      return product;
    }

    createProduct(producto: CreateProductDto){
      const newProduct = this.productRepository.create(producto)
      return this.productRepository.save(newProduct)
    }
    
}
