import React from "react";
import Header from "../components/header/Header";
import ExamItem from "../components/exam/ExamItem";
import PageBox from "../components/paging/PageBox";
import ExemBoxType from "../components/exam/ExamBoxType";

type Props = {};

const ExamList: React.FC = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100%] bg-white">
      <Header />
      <div className="bg-white pb-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="pb-4 flex flex-row justify-between border-b-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">
              Ngân hàng đề thi
            </h2>

            <ExemBoxType />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>

            <ExamItem />
            <ExamItem />
            <ExamItem />
            <ExamItem />
            <ExamItem />
            <ExamItem />
            <ExamItem />
            <ExamItem />
            <ExamItem />

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
