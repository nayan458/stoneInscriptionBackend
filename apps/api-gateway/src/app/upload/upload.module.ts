import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UuidModule } from 'nestjs-uuid';
import { UploadController } from './upload.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UuidModule, ConfigModule],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
