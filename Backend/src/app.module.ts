import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductsController } from '../src/products/products.controller';
import { ReportController } from './report/report.controller';

import { Usuario } from './users/user.entity';
import { Producto } from './products/product.entity';
import { Venta } from './sells/sell.entity';
import { DetalleVenta } from './sellDetail/sellDetail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'usuario',
      password: '1234',
      database: 'commerk',
      entities:[Usuario, Producto, Venta, DetalleVenta],
      //[__dirname + '/**/*/.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }),
  ],
  controllers: [AppController, UsersController, ProductsController, ReportController],
  providers: [AppService],
})
export class AppModule {}
