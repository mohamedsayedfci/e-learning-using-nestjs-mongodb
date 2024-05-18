// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/e-learning'), // 1.2 Setup the database
    CourseModule,
    LessonModule,
    UserModule,
    // QuizModule,
    AuthModule,
    // FileUploadModule,
  ],
})
export class AppModule {}
