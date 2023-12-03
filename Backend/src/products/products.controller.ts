import { Controller, Post, Get, Body } from '@nestjs/common';
import { Producto } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './products.service';


@Controller('products')
export class ProductsController {

  constructor(private productService:ProductService){}

  @Get()
  getProducts(): Promise<Producto[]> {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(@Body() newProduct:CreateProductDto):Promise<Producto> {
    return this.productService.createProduct(newProduct);
  }

}
