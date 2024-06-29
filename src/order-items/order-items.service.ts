import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderItem } from '@prisma/client';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<OrderItem[]> {
    return this.prisma.orderItem.findMany();
  }

  async findOne(id: number): Promise<OrderItem> {
    return this.prisma.orderItem.findUnique({ where: { id } });
  }

  async create(data: OrderItem): Promise<OrderItem> {
    return this.prisma.orderItem.create({ data });
  }

  async update(id: number, data: Partial<OrderItem>): Promise<OrderItem> {
    return this.prisma.orderItem.update({ where: { id }, data });
  }

  async remove(id: number): Promise<OrderItem> {
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
