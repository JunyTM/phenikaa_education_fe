import React from "react";
import { useNavigate } from "react-router-dom";


type Props = {
  groupName: string;
};

const ExamItem = (props: Props) => {
  const navigate = useNavigate();
  return (
    <button className="group relative" onClick={() => {
      navigate("/detail");
    }}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src="https://phenikaa.edu.vn/wp-content/uploads/2021/10/z2822538189956_d314e5d77daf6f16fadccf1195be105e-1092x533.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {props.groupName}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Tô Kim Mạnh</p>
        </div>
        <p className="text-sm font-medium text-gray-900">32 câu</p>
      </div>
    </button>
  );
};

export default ExamItem;
