import { Controller , Get } from '@nestjs/common';

@Controller('report')
export class ReportController {

  @Get()
  createProduct(): string {
    return "reporte generado"
  }

}
