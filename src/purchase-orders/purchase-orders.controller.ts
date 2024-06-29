import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrder } from '@prisma/client';

@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Get()
  findAll() {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrdersService.findOne(Number(id));
  }

  @Post()
  create(@Body() purchaseOrder: PurchaseOrder) {
    return this.purchaseOrdersService.create(purchaseOrder);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() purchaseOrder: Partial<PurchaseOrder>,
  ) {
    return this.purchaseOrdersService.update(Number(id), purchaseOrder);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrdersService.remove(Number(id));
  }
}
