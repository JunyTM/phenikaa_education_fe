import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ExamItem from "../components/exam/ExamItem";
import PageBox from "../components/paging/PageBox";
import ExemBoxType from "../components/exam/ExamBoxType";
import { getGroupQuestion } from "../utils/index";

type Props = {};

const ExamList: React.FC = (props: Props) => {
  const [istQuestionGroup, setIstQuestionGroup] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const respone = getGroupQuestion();
    respone.then((res) => {
      setIstQuestionGroup(res.data.data);
    });
  }, []);

  console.log(istQuestionGroup);
  return (
    <div className="w-[100vw] h-[100%] bg-white">
      <Header />
      <div className="bg-white pb-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="pb-4 flex flex-row justify-between border-b-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">
              Ngân hàng đề thi
            </h2>

            <ExemBoxType setSearch={setSearch} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {istQuestionGroup?.map((val: any) => {
              console.log("kiểm tra");
              if (val.groupName.includes(search)) {
                return <ExamItem groupId={val.id} groupName={val.groupName} />;
              }
            })}

            {/* <!-- More products... --> */}
          </div>
        </div>
        <PageBox />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ExamList;
