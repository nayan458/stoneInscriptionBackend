import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [path.resolve(process.cwd(), 'apps/auth/.env'), '.env']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
