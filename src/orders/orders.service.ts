import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/@core/infra/db/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async findOne(id: number): Promise<Order> {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async create(data: Order): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  async update(id: number, data: Partial<Order>): Promise<Order> {
    return this.prisma.order.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Order> {
    return this.prisma.order.delete({ where: { id } });
  }
}
