import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MICROSERVICES_CLIENTS } from 'src/constans';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
    constructor(
        @Inject(MICROSERVICES_CLIENTS.ORDERS_SERVICE)
        private readonly ordersClient: ClientProxy,
    ) {}

    @Post()
    createOrder(@Body() order: any) {
        return this.ordersClient.send('create_order', order);
    }
}
