import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from '@config/env.object';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.PORT || 3001);
}
bootstrap();
