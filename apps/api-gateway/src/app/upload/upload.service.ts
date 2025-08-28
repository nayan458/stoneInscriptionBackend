import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UuidService } from 'nestjs-uuid';
import { extname } from 'path';

@Injectable()
export class UploadService {
  // constructor
  constructor(
    private readonly uuidService: UuidService,
    private readonly configService: ConfigService
  ) {}

  // UPLOAD PRODUCT IMAGE

  // -- private method for uploading each image --
  private async uploadImage(file: Express.Multer.File): Promise<string> {
    const fileName = `${this.uuidService.generate()}.${extname(
      file.originalname
    )}`;
    // try {
    //     await this.s3Client.send(new PutObjectCommand({
    //         Bucket: 'clamio-product-image',
    //         Key: `${fileName}`,
    //         Body: file.buffer,
    //     }));
    //     return `https://clamio-product-image.s3.${this.configService.getOrThrow('AWS_S3_REGION')}.amazonaws.com/${fileName}`
    // } catch (error) {
    //     console.error('Error uploading image:', error);
    //     throw error;
    // }
    return 'helllo';
  }
  // -- MAIN method --
  async uploadProductImages(files: Express.Multer.File[]): Promise<string[]> {
    const uploadPromises: Promise<string>[] = files.map((file) => {
      return this.uploadImage(file);
    });
    return Promise.all(uploadPromises);
  }

  // PRODUCT UPLOADER

  async uploadProduct(file: Express.Multer.File): Promise<string> {
    const fileName = `${this.uuidService.generate()}${extname(
      file.originalname
    )}`;
    return 'hello';
    // try {
    //     await this.s3Client.send(new PutObjectCommand({
    //         Bucket: 'clamio-product-image',
    //         Key: fileName,
    //         Body: file.buffer,
    //     }));

    //     const region = this.configService.getOrThrow('AWS_S3_REGION');
    //     return `https://clamio-product.s3.${region}.amazonaws.com/${fileName}`;
    // } catch (error) {
    //     console.error('Error uploading file:', error);
    //     throw error;
    // }
  }

  // CREATOR PROFILE UPLOADER
  async uploadCreatorProfile(fileName: string, file: Buffer) {
    const filename = `${this.uuidService.generate()}.${extname(fileName)}`;
    // try {
    //     const imageDetails = await this.s3Client.send(
    //         new PutObjectCommand({
    //             Bucket: 'clamio-image',
    //             Key: filename,
    //             Body: file,
    //         })
    //     );
    //     return `https://clamio-image.s3.${this.configService.getOrThrow('AWS_S3_REGION')}.amazonaws.com/${filename}`
    // } catch (error) {
    //     console.error('Error uploading image:', error);
    //     throw error;
    // }
    return 'hello';
  }
}
