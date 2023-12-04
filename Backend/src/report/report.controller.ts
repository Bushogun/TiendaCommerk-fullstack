import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';
import { Venta } from '../sells/sell.entity';
import { Usuario } from '../users/user.entity';
import { Producto } from '../products/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('report')
export class ReportController {
  constructor(
    @InjectRepository(Venta) private sellRepository: Repository<Venta>,
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Producto) private productoRepository: Repository<Producto>,
    private readonly excelExportService: ReportService) {}

  @Get()
  async generateExcelReport(): Promise<string> {
    const usuarios = await this.usuarioRepository.find();
    const productos = await this.productoRepository.find();
    const ventas = await this.sellRepository.find();
    const filePath = await this.excelExportService.exportDataToExcel(usuarios, productos, ventas);
    return filePath;
  }
}
