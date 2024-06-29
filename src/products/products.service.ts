import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/@core/infra/db/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: number): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: Product): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
