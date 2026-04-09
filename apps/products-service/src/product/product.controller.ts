import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('order.created')
  async updatedStock(order: { id: number; productId: number }){
    console.log('Checking stock for the product', order.productId);
    console.log('Stock updated');
  } 
    
}
