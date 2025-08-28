import { Module } from '@nestjs/common';
import { ImageUploaderModule } from './imageUploader/image-uploader.module';
import { ConfigModule } from '@nestjs/config';
import path from 'path';

@Module({
  imports: [
    ImageUploaderModule,
    ConfigModule.forRoot({
      envFilePath: [
        path.resolve(process.cwd(), 'apps/api-gateway/.env'),
        '.env',
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
