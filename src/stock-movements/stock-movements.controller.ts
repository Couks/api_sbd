import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StockMovementsService } from './stock-movements.service';
import { StockMovement } from '@prisma/client';

@Controller('stock-movements')
export class StockMovementsController {
  constructor(private readonly stockMovementsService: StockMovementsService) {}

  @Get()
  findAll() {
    return this.stockMovementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockMovementsService.findOne(Number(id));
  }

  @Post()
  create(@Body() stockMovement: StockMovement) {
    return this.stockMovementsService.create(stockMovement);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() stockMovement: Partial<StockMovement>,
  ) {
    return this.stockMovementsService.update(Number(id), stockMovement);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockMovementsService.remove(Number(id));
  }
}
