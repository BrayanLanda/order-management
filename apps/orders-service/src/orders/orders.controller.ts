import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('create_order')
  createOrder(order: any) {
    return { message: 'Order created', order };
  }
}
