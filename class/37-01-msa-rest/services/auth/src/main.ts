import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // 주소입력?
      transport: Transport.TCP,
      options: {
        host: 'auth-service', // 이름이라서 아무거나 해줘도됨
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
