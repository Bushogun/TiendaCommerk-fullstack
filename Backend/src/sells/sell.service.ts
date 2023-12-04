import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Venta } from './sell.entity'
import { Repository } from "typeorm";
import { CreateSellDto } from './dto/sells.dto'

@Injectable()
export class SellService{

  constructor(@InjectRepository (Venta) private sellRepository: Repository<Venta>){}

    createSell(sell: CreateSellDto){
      const newSell = this.sellRepository.create(sell)
      return this.sellRepository.save(newSell)
    }
}
