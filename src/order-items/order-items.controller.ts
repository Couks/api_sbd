import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItem } from '@prisma/client';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(Number(id));
  }

  @Post()
  create(@Body() orderItem: OrderItem) {
    return this.orderItemsService.create(orderItem);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() orderItem: Partial<OrderItem>) {
    return this.orderItemsService.update(Number(id), orderItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(Number(id));
  }
}
