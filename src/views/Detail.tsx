import React, { useState, useEffect, useLayoutEffect } from "react";
import { fetchData } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";
import QuestionPublic from "../components/questionPublic/QuestionPublicItem";
type Props = {};

const Detail = (props: Props) => {
  const [groupQuestion, setGroupQuestion] = useState([]); // [1
  const [listQuestionGroup, setListQuestionGroup] = useState([]);
  const [listAnswer, setListAnswer] = useState<any>([]);
  const [score, setScore] = useState<number>(0);
  const location = useLocation();
  const groupId = location.state?.groupId;

  const navigate = useNavigate();
  useLayoutEffect(() => {
    const respone1 = fetchData("group/" + groupId);
    respone1.then((res) => {
      setGroupQuestion(res.data.data);
    });

    const respone2 = fetchData("question/" + groupId);
    respone2.then((res) => {
      setListQuestionGroup(res.data.data);
    });

    const respone3 = fetchData("answer");
    respone3.then((res) => {
      setListAnswer(res.data.data);
    });
  }, []);

  type Question = {
    question: string;
  };
  const questionGroup: Question[] = listQuestionGroup;

  const handelSubmit = () => {
    navigate("/result", {
      state: {
        score: score,
        summary: questionGroup.length - 1,
        groupQuestion: groupQuestion,
      },
    });
  };

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-[70%] h-full m-auto relative">
        <div className="w-[80%] h-40 fix mt-12 bg-slate-200 justify-between items-center flex flex-row m-auto rounded-lg z-50">
          <div className="">
            <h1 className="font-bold text-3xl pt-3 pl-10 pb-6">
              {
                (groupQuestion[0] as { groupName: string } | undefined)
                  ?.groupName
              }
            </h1>
            <p className="pl-10 font-semibold">
              Người tạo đề: Tô Kim Mạnh * Thời gian 60 phút
            </p>
          </div>

          <div>
            <button
              className="w-52 h-24 mr-5 text-2xl font-semibold text-gray-600 hover:text-gray-700 bg-red-300 hover:bg-red-500 rounded-2xl justify-end shadow-md"
              onClick={handelSubmit}
            >
              Nộp bài
            </button>
          </div>
        </div>

        <div className="w-[80%] h-full bg-slate-100 mt-12 m-auto rounded-lg">
          {questionGroup?.map((val: any, index: any) => {
            if (index === questionGroup.length - 1) {
              return null;
            }
            return (
              <QuestionPublic
                index={index + 1}
                question={val}
                answer={listAnswer}
                setScore={setScore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
