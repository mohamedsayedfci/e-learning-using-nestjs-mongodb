// src/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: 'student' | 'instructor' | 'admin';

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Course' }] })
  enrolledCourses: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
