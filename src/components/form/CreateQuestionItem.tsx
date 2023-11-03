import React, { useState } from "react";
import { QuestionModelCreate } from "../../model/index";
import { createQuestionGroup, postData, fetchData } from "../../utils/index";
import CreateAnswerItem from "./CreateAnswerItem";

type Props = {
  groupName: string;
  setUpdate: any;
  setQuestions: any;
  setListAnswer: any;
};

const CreateQuestionItem = (props: Props) => {
  const [groupId, setGroupId] = useState<number>(0);
  const [questionId, setQuestionId] = useState<number>(0); // [1
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<QuestionModelCreate["answer"]>([]);

  const insertQuestionGroup = () => {
    let group: any;
    const QuestionGroup = {
      groupName: props.groupName,
    };
    const respone = postData("group", QuestionGroup);
    console.log("respone group:", respone);
    respone.then((res) => {
      setGroupId(res.data.data.id);
      group = res.data.data;
    });
    return group;
  };

  const insertAnswer = (newAS: any) => {
    const respone = postData("answer", {
      questionId: newAS.questionId,
      answer: newAS.answer,
      isCorrect: newAS.isCorrect,
    });
    respone.then((res) => {
      console.log("thêm câu trả lời thành công");
    });
  };

  const insertQuestion = (newQS: any) => {
    const respone = postData("question", {
      groupId: newQS.questionGroupId,
      question: newQS.title,
    });
    respone.then((res) => {
      // console.log("thêm câu hỏi thành công");
      setQuestionId(res.data.data.id);
    });

    for (let i = 0; i < newQS.answer.length; i++) {
      const newAS = {
        questionId: questionId,
        answer: newQS.answer[i].answer,
        isCorrect: newQS.answer[i].isCorrect,
      };
      insertAnswer(newAS);
    }
  };

  const resertForm = (groupId: number) => {
    props.setUpdate(groupId);
    setQuestion("");
  };

  const handelAddQuestion = () => {
    if (groupId == 0) {
      const groupInfo = insertQuestionGroup();
      const NewQuestion = {
        title: question,
        answer: answer,
        questionGroupId: groupInfo.id,
      };
      insertQuestion(NewQuestion);
    } else {
      const NewQuestion = {
        title: question,
        answer: answer,
        questionGroupId: groupId,
      };
      insertQuestion(NewQuestion);
    }
    console.log("Tạo bộ câu hỏi thành công");
    console.log(answer);
    resertForm(groupId);
  };
  return (
    <div className="mt-8">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 m-0">
          <div className="grid grid-cols-6 gap-x-6 gap-y-4 sm:grid-cols-5">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nội dung câu hỏi
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  value={question}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
            </div>
            <CreateAnswerItem numbOf={1} list={answer} setAnswer={setAnswer} />
            <CreateAnswerItem numbOf={2} list={answer} setAnswer={setAnswer} />
            <CreateAnswerItem numbOf={3} list={answer} setAnswer={setAnswer} />
            <CreateAnswerItem numbOf={4} list={answer} setAnswer={setAnswer} />
          </div>
        </div>
      </div>
      <button
        className="w-full h-14 text-md font-extralight hover:bg-slate-100 active:translate-y-1"
        onClick={handelAddQuestion}
      >
        Thêm câu hỏi +
      </button>
    </div>
  );
};

export default CreateQuestionItem;
