import React from "react";
import Cookies from "js-cookie";
import Login from "../components/layouts/Login";

// import React from "react";
// import Cookies from "js-cookie";
// import Login from "../components/layouts/Login";

type Props = {
  children?: any;
};

const Auth: React.FC<Props> = ({ children }) => {
  const AccessToken = Cookies.get("AccessToken");
  return (
    // <React.Fragment>{AccessToken ? children : <Login />}</React.Fragment>
    <React.Fragment>{AccessToken ? children : <Login />}</React.Fragment>
  );
};

export default Auth;
