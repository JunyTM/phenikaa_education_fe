import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Question from "../components/form/Question";
import CreateQuestionItem from "../components/form/CreateQuestionItem";
import CreateQuestionGroup from "../components/form/CreateQuestionGroup";
import { useNavigate } from "react-router-dom";

import { fetchData } from "../utils/index";

type Props = {};

const QuestionGroup = (props: Props) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<any>();
  const [listAnswer, setListAnswer] = useState<any>([]); // [1
  const [isUpdate, setUpdate] = useState<number>(0);
  const [groupName, setGroupName] = useState<string>("");

  const loadData = () => {
    let data: any;
    const respone = fetchData("question/" + isUpdate);
    respone.then((res) => {
      data = res.data.data;
    });
    setQuestions(data);
  };

  useEffect(() => {
    if (isUpdate === 0) {
      return;
    }
    loadData();
  });

  console.log("setUpdate:", questions);
  return (
    <div className="w-full h-[100%] bg-white">
      <Header />
      <div className="w-[60%] mt-10 m-auto">
        <CreateQuestionGroup setGroupName={setGroupName} />
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/2 ml-32 pr-20">
          <CreateQuestionItem
            setUpdate={setUpdate}
            groupName={groupName}
            setQuestions={setQuestions}
            setListAnswer={setListAnswer}
          />
        </div>
        <div className="w-1/2 h-[500px] mt-14 mr-10 rounded-lg bg-slate-200 backdrop-opacity-10 overflow-scroll">
          {questions?.map((val: any, index: any) => {
            return (
              <Question id={index} title={val.question} answer={val.answer} />
            );
          })}
        </div>
      </div>
      <div className="w-[80%] h-24 pb-9 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => {
            navigate("/#");
          }}
        >
          Hủy bỏ
        </button>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={loadData}
        >
          Lưu bộ câu hỏi
        </button>
      </div>
    </div>
  );
};

export default QuestionGroup;
