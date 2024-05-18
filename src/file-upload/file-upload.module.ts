// src/file-upload/file-upload.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';

@Module({
  imports: [
    MulterModule.register({
      storage: FileUploadService.storageOptions(),
    }),
  ],
  providers: [FileUploadService],
  exports: [MulterModule, FileUploadService],
})
export class FileUploadModule {}
