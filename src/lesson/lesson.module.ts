// src/lesson/lesson.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonService } from '../lesson/lesson.service';
import { LessonController } from '../lesson/lesson.controller';
import { Lesson, LessonSchema } from '../schemas/lesson.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }])],
  providers: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
