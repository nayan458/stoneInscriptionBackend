/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// require('module-alias/register')
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { init } from '@stone-inscription-backend/nestjs-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await init(app);
}

bootstrap();
