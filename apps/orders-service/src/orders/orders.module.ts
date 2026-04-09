import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MICROSERVICE } from 'src/constants';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: MICROSERVICE.PRODUCTS_SERVICE,
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  ])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
