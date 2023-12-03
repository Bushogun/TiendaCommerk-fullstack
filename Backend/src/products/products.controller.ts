import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get()
  createProduct(): string {
    return "Has ingresado"
  }

  @Post()
  createSell(@Body() product): string {
    return "aquí vas a crear un usuario"
  }

}
