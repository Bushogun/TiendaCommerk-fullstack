import { Injectable } from '@nestjs/common';
import { Usuario } from '../users/user.entity';
import { Producto } from '../products/product.entity';
import { Venta } from '../sells/sell.entity';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class ReportService {
  async exportDataToExcel(usuarios: Usuario[], productos: Producto[], ventas: Venta[]): Promise<string> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    worksheet.addRow(['Usuarios']);
    worksheet.addRow(['Nombre', 'Nombre de Usuario', 'Correo Electrónico', 'Total de Ventas', 'Balance']);
    usuarios.forEach(usuario => {
      worksheet.addRow([
        usuario.Nombre,
        usuario.NombreUsuario,
        usuario.CorreoElectronico,
        usuario.TotalVentas,
        usuario.Balance,
      ]);
    });

    worksheet.addRow([]);

    worksheet.addRow(['Productos']);
    worksheet.addRow(['Nombre del Producto', 'Descripción', 'Precio Real', 'Precio de Venta', 'Cantidad', 'Fecha de Creación']);
    productos.forEach(producto => {
      worksheet.addRow([
        producto.NombreProducto,
        producto.DescripcionProducto,
        producto.PrecioReal,
        producto.PrecioVenta,
        producto.Cantidad,
        producto.FechaCreacion,
      ]);
    });

    worksheet.addRow([]);

    worksheet.addRow(['Ventas']);
    worksheet.addRow(['Nombre del Producto', 'Fecha de Creación', 'Nombre del Vendedor']);
    ventas.forEach(venta => {
      worksheet.addRow([
        venta.nombreProducto,
        venta.FechaCreacion,
        venta.nombreVendedor,
      ]);
    });

    const filePath = path.join('C:\\Users\\Minotauro\\Downloads', 'report.xlsx');
    await workbook.xlsx.writeFile(filePath);
    return filePath;
  }
}
