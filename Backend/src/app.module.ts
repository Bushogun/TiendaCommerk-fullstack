import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './infrastructure/controllers/users/users.controller';
import { ProductsController } from './infrastructure/controllers/products/products.controller';
import { ReportController } from './infrastructure/controllers/report/report.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ProductsController, ReportController],
  providers: [AppService],
})
export class AppModule {}
