import { Controller , Get } from '@nestjs/common';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';

@Controller('report')
export class ReportController {

  @Get()
  report(): string {
    return "reporte generado"
  }

}
