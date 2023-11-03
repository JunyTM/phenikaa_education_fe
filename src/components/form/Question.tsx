import React from "react";

type Props = {
  id: number;
  title: string;
  answer: any;
};

const Question = (props: Props) => {
  let answerKey = ["A", "B", "C", "D"];
  return (
    <React.Fragment>
      {props.id ? (
        <div className="m-1">
          <div className="w-full pt-2 h-auto pb-6 m-auto relative flex flex-row items-center justify-between gap-x-6">
            <p className="w-[90%] ml-12">
              <span className="font-bold">{"Câu " + props.id + ":"}</span>
              {" " + props.title}
            </p>

            <button
              type="button"
              className="ml-2 mr-5 w-12 top-0 right-0 text-sm font-extralight leading-6 text-gray-400 hover:text-gray-900 bg-slate-100 hover:bg-slate-300 "
            >
              X
            </button>
          </div>

          <div>
            <ul className="w-[90%] flex flex-row justify-around">
              {props.answer.map((val: any, key: any) => {
                return <li>{answerKey[key - 1] + ": " + val.answer}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Question;
