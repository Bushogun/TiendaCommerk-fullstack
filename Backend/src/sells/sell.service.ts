import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSellDto } from './dto/sells.dto';
import { Venta } from './sell.entity';
import { Usuario } from '../users/user.entity';
import { Producto } from '../products/product.entity';

@Injectable()
export class SellService {

  constructor(
    @InjectRepository(Venta) private sellRepository: Repository<Venta>,
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Producto) private productoRepository: Repository<Producto>,
  ) {}

  async createSell(sell: CreateSellDto) {
    const newSell = this.sellRepository.create(sell);
    const savedSell = await this.sellRepository.save(newSell);
    const producto = await this.productoRepository.findOne({ where: { NombreProducto: sell.NombreProducto } });
    if (producto) {
      producto.Cantidad -= 1;
      await this.productoRepository.save(producto);
    }
    const usuario = await this.usuarioRepository.findOne({ where: { Nombre: sell.NombreVendedor } });
    if (usuario) {
      usuario.TotalVentas += 1;
      if (producto) {
        usuario.Balance += producto.PrecioVenta - producto.PrecioReal;
      }
      await this.usuarioRepository.save(usuario);
    }
    return savedSell;
  }
}
