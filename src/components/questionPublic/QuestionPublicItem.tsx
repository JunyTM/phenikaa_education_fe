import React from "react";

type Props = {
  index: number;
  question: any;
  answer: any;
  setScore: any;
};

const QuestionPublic = (props: Props) => {
  return (
    <div>
      <div className="mt-10 space-y-10">
        <fieldset>
          <legend className="p-7 text-sm font-semibold leading-6 text-gray-900">
            <h1 className="">{"Câu " + props.index + ":"}</h1>
            {props.question?.question}
          </legend>
          <div className="mt-2 ml-10 space-y-6">
            {props.answer?.map((item: any, index: number) => {
              if (item.questionId == props.question?.id) {
                return (
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id={"Câu " + props.index}
                        name={"Câu " + props.index}
                        type="radio"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={(e) => {
                          if (e.target.value && item.isCorrect) {
                            props.setScore((pre: any) => pre + 1);
                          }
                        }}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <p className="text-gray-900 font-medium">{item.answer}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default QuestionPublic;
