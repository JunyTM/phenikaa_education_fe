import React from "react";

type Props = {};

const Home: React.FC = (props: Props) => {
  return <div>Home</div>;
};

const homeLoader = () => {
    alert("homeLoader");
};


export default Home;

export { homeLoader };
