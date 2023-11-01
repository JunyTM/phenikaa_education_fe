import React from "react";
import Header from "../components/header/Header";
import SubBanner from "../components/banner/SubBanner";
import Footer from "../components/footer/Footer";
type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div>
      <Header />
      <img
        className="w-[60%] mt-10 m-auto"
        src="https://riki.edu.vn/kiem-tra-trinh-do-tieng-nhat/img/banner1_pc.png"
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
