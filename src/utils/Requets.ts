import axios from "axios";

type Props = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers: {
    [key: string]: string;
  };
  body?: any;
};

const URL = import.meta.env.VITE_REACT_BASE_URL;

const Requets = async (props: Props) => {
  switch (props.method) {
    case "GET":
      await axios
        .get(URL + "/" + props.path)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log("Get request:", error);
        });
      break;
    case "POST":
      await axios
        .post(URL + "/" + props.path, props.body)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log("Post request:", error);
        });
      break;
    case "PUT":
      await axios
        .put(URL + "/" + props.path, props.body)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log("Put request:", error);
        });
      break;
  }
};

export default Requets;
