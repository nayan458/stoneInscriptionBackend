import { Module } from '@nestjs/common';
import { ImageUploaderModule } from './imageUploader/image-uploader.module';

@Module({
  imports: [ImageUploaderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
