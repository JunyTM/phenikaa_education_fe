import React from "react";
import Header from "../components/header/Header";
type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div>
      <Header />
    </div>
  );
};

const homeLoader = () => {
  alert("homeLoader");
};

export default Home;

export { homeLoader };
