import React from "react";
import Cookies from "js-cookie";
import Login from "../components/layouts/Login";

// import React from "react";
// import Cookies from "js-cookie";
// import Login from "../components/layouts/Login";

const AccessToken = Cookies.get("AccessToken");

type Props = {
  children?: any;
};

const Auth: React.FC<Props> = ({ children }) => {
  return (
    // <React.Fragment>{AccessToken ? children : <Login />}</React.Fragment>
    <React.Fragment>{true ? children : <Login />}</React.Fragment>
  );
};

export default Auth;
