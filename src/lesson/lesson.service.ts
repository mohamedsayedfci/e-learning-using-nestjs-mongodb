// src/lesson/lesson.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from '../schemas/lesson.schema';

@Injectable()
export class LessonService {
  constructor(@InjectModel('Lesson') private lessonModel: Model<Lesson>) {}

  async create(lesson: Lesson): Promise<Lesson> {
    const newLesson = new this.lessonModel(lesson);
    return newLesson.save();
  }

  async findAll(): Promise<Lesson[]> {
    return this.lessonModel.find().exec();
  }

  async findOne(id: string): Promise<Lesson> {
    return this.lessonModel.findById(id).exec();
  }

  async update(id: string, lesson: Lesson): Promise<Lesson> {
    return this.lessonModel.findByIdAndUpdate(id, lesson, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.lessonModel.findByIdAndDelete(id).exec();
  }
}
