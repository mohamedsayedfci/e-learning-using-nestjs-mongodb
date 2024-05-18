// src/file-upload/file-upload.service.ts
import { Injectable } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

@Injectable()
export class FileUploadService {
  static storageOptions() {
    return diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const fileExt = extname(file.originalname);
        const fileName = `${uuidv4()}${fileExt}`;
        callback(null, fileName);
      },
    });
  }
}
