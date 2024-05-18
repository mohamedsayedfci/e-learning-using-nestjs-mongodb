// src/quiz/quiz.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from '../schemas/quiz.schema';

@Injectable()
export class QuizService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {}

  async create(quiz: Quiz): Promise<Quiz> {
    const newQuiz = new this.quizModel(quiz);
    return newQuiz.save();
  }

  async findAll(): Promise<Quiz[]> {
    return this.quizModel.find().exec();
  }

  async findOne(id: string): Promise<Quiz> {
    return this.quizModel.findById(id).exec();
  }

  async update(id: string, quiz: Quiz): Promise<Quiz> {
    return this.quizModel.findByIdAndUpdate(id, quiz, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.quizModel.findByIdAndDelete(id).exec();
  }
}
