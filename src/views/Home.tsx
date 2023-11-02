import React from "react";
import Header from "../components/header/Header";
import SubBanner from "../components/banner/SubBanner";
import Footer from "../components/footer/Footer";
import Benner from "../assets/benner.png";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div>
      <Header />
      <img
        className="w-[60%] mt-10 m-auto"
        src={Benner}
        alt="random"
      />
      <SubBanner />
      <Footer />
    </div>
  );
};

const homeLoader = () => {
  alert("homeLoader");
};

export default Home;

export { homeLoader };
