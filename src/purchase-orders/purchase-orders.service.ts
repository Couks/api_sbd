import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/@core/infra/db/prisma.service';
import { PurchaseOrder } from '@prisma/client';

@Injectable()
export class PurchaseOrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PurchaseOrder[]> {
    return this.prisma.purchaseOrder.findMany();
  }

  async findOne(id: number): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.findUnique({ where: { id } });
  }

  async create(data: PurchaseOrder): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.create({ data });
  }

  async update(
    id: number,
    data: Partial<PurchaseOrder>,
  ): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.update({ where: { id }, data });
  }

  async remove(id: number): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.delete({ where: { id } });
  }
}
