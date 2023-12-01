import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/:id')
  getProduct(){
    return 'prod 1 prod 2'
  }


  @Get('generar-reporte')
  generarReporte() {
    return 'holi soy un reporte';
  }


}
