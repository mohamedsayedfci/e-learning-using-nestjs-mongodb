// src/schemas/quiz.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Quiz extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [{ question: String, options: [String], correctAnswer: String }] })
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  
  @Prop({ required: true, type: Types.ObjectId, ref: 'Course' })
  course: Types.ObjectId;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
