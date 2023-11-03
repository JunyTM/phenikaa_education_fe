export interface QuestionModelCreate {
  id: number;
  title: string;
  groupId?: number;
  answer: any;
}

export interface GroupQuestionInfo {
  id: number;
  groupName: string;
}
