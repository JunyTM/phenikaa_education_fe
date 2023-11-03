import React from "react";
import Auth from "./Auth";
import Detail from "./Detail";
type Props = {};

const Practice = (props: Props) => {
  return (
    <div>
      <Auth children={<Detail />}></Auth>
    </div>
  );
};

export default Practice;
