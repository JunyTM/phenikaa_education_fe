import React from "react";
import Cookies from "js-cookie";
import Login from "../components/layouts/Login";

const AccessToken = Cookies.get("AccessToken");

type Props = {
  children?: React.ReactNode;
};

const Auth: React.FC = (props: Props) => {
  return (
    <React.Fragment>{AccessToken ? props.children : <Login />}</React.Fragment>
  );
};

export default Auth;
