// // src/schemas.ts
// import * as mongoose from 'mongoose';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// // User schema with discriminator key for different user types
// @Schema()
// export class User extends Document {
//   @Prop({ required: true })
//   username: string;

//   @Prop({ required: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ required: true, enum: ['student', 'instructor'] })
//   type: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);

// @Schema()
// export class Course extends Document {
//   @Prop({ required: true })
//   name: string;

//   @Prop()
//   image: string;

//   @Prop({ required: true })
//   description: string;

//   @Prop({ required: true })
//   price: number;

//   @Prop({ required: true })
//   startAt: Date;

//   @Prop({ required: true })
//   endAt: Date;

//   @Prop({ required: true })
//   successDegree: number;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
//   instructor: mongoose.Types.ObjectId;

//   @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
//   students: mongoose.Types.ObjectId[];
// }

// export const CourseSchema = SchemaFactory.createForClass(Course);

// @Schema()
// export class Lesson extends Document {
//   @Prop({ required: true })
//   name: string;

//   @Prop()
//   image: string;

//   @Prop({ required: true })
//   description: string;

//   @Prop({ required: true })
//   videoUrl: string;

//   @Prop({ required: true })
//   duration: number;

//   @Prop({ type: [String] })
//   files: string[];

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
//   course: mongoose.Types.ObjectId;
// }

// export const LessonSchema = SchemaFactory.createForClass(Lesson);

// @Schema()
// export class Quiz extends Document {
//   @Prop({ required: true })
//   questions: string;

//   @Prop({ required: true })
//   answers: string;

//   @Prop({ required: true })
//   correctAnswer: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' })
//   lesson: mongoose.Types.ObjectId;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
//   course: mongoose.Types.ObjectId;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
//   student: mongoose.Types.ObjectId;
// }

// export const QuizSchema = SchemaFactory.createForClass(Quiz);

// @Schema()
// export class Certificate extends Document {
//   @Prop({ required: true })
//   name: string;

//   @Prop({ required: true })
//   date: Date;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
//   course: mongoose.Types.ObjectId;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
//   student: mongoose.Types.ObjectId;
// }

// export const CertificateSchema = SchemaFactory.createForClass(Certificate);
