import { Module } from '@nestjs/common';
import { ImageUploaderService } from './image-uploader.service';
import { ImageUploaderController } from './image-uploader.controller';

@Module({
  providers: [ImageUploaderService],
  controllers: [ImageUploaderController],
})
export class ImageUploaderModule {}
