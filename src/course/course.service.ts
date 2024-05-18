// src/course/course.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from '../schemas/course.schema';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(course: Course): Promise<Course> {
    const newCourse = new this.courseModel(course);
    return newCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }

  async update(id: string, course: Course): Promise<Course> {
    return this.courseModel.findByIdAndUpdate(id, course, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.courseModel.findByIdAndDelete(id).exec();
  }
}
