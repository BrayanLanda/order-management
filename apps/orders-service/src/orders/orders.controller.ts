import { Controller, Inject } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MICROSERVICE } from 'src/constants';

@Controller()
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    @Inject(MICROSERVICE.PRODUCTS_SERVICE)
    private readonly productsRedisClient: ClientProxy,
  ) {}

  @MessagePattern('create_order')
  createOrder(order: any) {
    this.productsRedisClient.emit('order.created', order);
    return { message: 'Order created', order };
  }
}
