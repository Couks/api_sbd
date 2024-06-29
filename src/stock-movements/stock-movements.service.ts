import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/@core/infra/db/prisma.service';
import { StockMovement } from '@prisma/client';

@Injectable()
export class StockMovementsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<StockMovement[]> {
    return this.prisma.stockMovement.findMany();
  }

  async findOne(id: number): Promise<StockMovement> {
    return this.prisma.stockMovement.findUnique({ where: { id } });
  }

  async create(data: StockMovement): Promise<StockMovement> {
    return this.prisma.stockMovement.create({ data });
  }

  async update(
    id: number,
    data: Partial<StockMovement>,
  ): Promise<StockMovement> {
    return this.prisma.stockMovement.update({ where: { id }, data });
  }

  async remove(id: number): Promise<StockMovement> {
    return this.prisma.stockMovement.delete({ where: { id } });
  }
}
