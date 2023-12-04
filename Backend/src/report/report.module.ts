import { ReportService } from './report.service';
import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';

@Module({
  imports: [],
  controllers:[ReportController],
  providers:[ReportService]
})
export class ReportModule{}
