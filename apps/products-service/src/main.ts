import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('ProductsService');
  const tcpMicroservices = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      port: 4002,
    }
  });

  const redisMicroservices = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    }
  });

  await Promise.all([
    tcpMicroservices.listen(),
    redisMicroservices.listen(),
  ]);
  logger.log('Products Service is running on port 4002, listening on redis port 6379');
}
bootstrap();
