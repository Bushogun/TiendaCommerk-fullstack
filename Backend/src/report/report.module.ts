import { ReportService } from './report.service';
import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { Venta } from 'src/sells/sell.entity';
import { Usuario } from 'src/users/user.entity';
import { Producto } from 'src/products/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, Usuario, Producto])],
  controllers:[ReportController],
  providers:[ReportService]
})
export class ReportModule{}
