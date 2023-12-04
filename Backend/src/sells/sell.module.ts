import { SellService } from './sell.service';
import { Module } from '@nestjs/common';
import { SellsController } from './sell.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './sell.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta])],
  controllers:[SellsController],
  providers:[SellService]
})
export class SellsModule{}
