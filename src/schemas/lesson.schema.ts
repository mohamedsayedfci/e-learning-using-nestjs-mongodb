// src/schemas/lesson.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Lesson extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ required: true })
  duration: number;

  @Prop([String])
  files: string[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
