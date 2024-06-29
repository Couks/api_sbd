import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from '@prisma/client';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(Number(id));
  }

  @Post()
  create(@Body() customer: Customer) {
    return this.customersService.create(customer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customer: Partial<Customer>) {
    return this.customersService.update(Number(id), customer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(Number(id));
  }
}
