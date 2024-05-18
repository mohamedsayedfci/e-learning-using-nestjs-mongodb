// src/schemas/course.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import { Lesson } from './lesson.schema';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  startAt: Date;

  @Prop({ required: true })
  endAt: Date;

  @Prop({ required: true })
  successDegree: number;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  instructor: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Lesson' }] })
  lessons: Lesson[];

  @Prop({ default: 0 })
  numberOfStudents: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
