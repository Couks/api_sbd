import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { StockMovementsModule } from './stock-movements/stock-movements.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    ProductsModule,
    OrdersModule,
    OrderItemsModule,
    StockMovementsModule,
    PurchaseOrdersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
