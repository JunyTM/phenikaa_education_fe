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
      <div className="w-full h-[500px] pt-10 bg-green-300">
        <img className="w-[60%] m-auto" src={Benner} alt="random" />  
      </div>
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
