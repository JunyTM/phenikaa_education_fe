import React from "react";

type Props = {};

const CreateQuestionGroup = (props: Props) => {
  return (
    <div>
      <div className="border-b-4 border-gray-900/10 pb-8">
        <h1 className="text-3xl font-semibold leading-10 text-gray-900">
          Tạo mới bộ câu hỏi
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Đặt tên bộ câu hỏi:
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="VD: Kiểm tra lập trình"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mô tả
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Một số thông tin sơ qua về bộ đề.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold leading-10 text-gray-900">
        Danh sách câu hỏi
      </h1> 
    </div>
  );
};

export default CreateQuestionGroup;
