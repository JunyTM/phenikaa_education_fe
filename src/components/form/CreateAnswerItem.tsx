import React, { useState, useEffect } from "react";

type Props = {
  numbOf: number;
  setAnswer: any;
  list: any;
};

const CreateAnswerItem = (props: Props) => {
  const [isCorrect, setCorrect] = useState<boolean>(false); // [1
  const [answerItem, setAnswerItem] = useState<string>("");
  let currentAnswerList = props.list;
  useEffect(() => {
    let id = setTimeout(() => {
      // Cập nhập lại danh sách câu trả lời
      currentAnswerList[props.numbOf - 1] = {
        ...currentAnswerList[props.numbOf - 1],
        answer: answerItem,
        isCorrect: isCorrect,
      };
      props.setAnswer(currentAnswerList);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [answerItem]);

  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="postal-code"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Câu trả lời " + props.numbOf + ":"}
      </label>
      <div className="mt-1 flex flex-row">
        <input
          type="text"
          name="postal-code"
          id="postal-code"
          value={answerItem}
          autoComplete="postal-code"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setAnswerItem(e.target.value)}
        />
        <input
          type="checkbox"
          className="ml-7"
          checked={isCorrect}
          onChange={() => setCorrect(!isCorrect)}
        />
      </div>
    </div>
  );
};

export default CreateAnswerItem;
