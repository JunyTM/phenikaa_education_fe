import axios, { AxiosResponse } from "axios";
import { ResponseModel } from "../model";

const URL = import.meta.env.VITE_REACT_BASE_URL;

const fetchData = async (path: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse<ResponseModel> = await axios.get(
      URL + "/" + path
    );
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error("Lỗi khi gọi API: " + error.message);
  }
};

const postData = async (path: string, data: any): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse<ResponseModel> = await axios.post(
      URL + "/" + path,
      data
    );
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error("Lỗi khi gọi API: " + error.message);
  }
};

const getGroupQuestion = () => {
  return fetchData("group");
};

const  createQuestionGroup = (data: any) => {
  return postData("group", data);
};
export { getGroupQuestion, createQuestionGroup, postData, fetchData };
