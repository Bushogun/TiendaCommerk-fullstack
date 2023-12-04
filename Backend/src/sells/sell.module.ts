import { SellService } from './sell.service';
import { Module } from '@nestjs/common';
import { SellsController } from './sell.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './sell.entity';
import { Usuario } from 'src/users/user.entity';
import { Producto } from 'src/products/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, Usuario, Producto])],
  controllers:[SellsController],
  providers:[SellService]
})
export class SellsModule{}
