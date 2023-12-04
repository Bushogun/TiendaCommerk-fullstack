import { SellService } from './sell.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSellDto } from './dto/sells.dto';
import { Venta } from './sell.entity';

@Controller('sell')
export class SellsController {
  constructor(private sellService:SellService){}

  @Post()
  createSell(@Body() newSell:CreateSellDto):Promise<Venta> {
    return this.sellService.createSell(newSell);
  }
}
