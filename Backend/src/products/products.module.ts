import { ProductService } from './products.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers:[ProductsController],
  providers:[ProductService]
})
export class ProductsModule{}
