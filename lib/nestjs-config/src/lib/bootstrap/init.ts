import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { cookieParser } from 'cookie-parser';
// import cookieParser = require('cookie-parser');
import cookieParser = require('cookie-parser');

export async function init(app: INestApplication) {
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  const port = app.get(ConfigService).getOrThrow('PORT');
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}
