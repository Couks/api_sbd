import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/@core/infra/db/prisma.service';
import { Customer } from '@prisma/client';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number): Promise<Customer> {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  async create(data: Customer): Promise<Customer> {
    return this.prisma.customer.create({ data });
  }

  async update(id: number, data: Partial<Customer>): Promise<Customer> {
    return this.prisma.customer.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Customer> {
    return this.prisma.customer.delete({ where: { id } });
  }
}
