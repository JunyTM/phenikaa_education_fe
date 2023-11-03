export interface AnswerModel {
  id: number;
  answer: string;
  questionId?: number;
  isCorrect: boolean;
}