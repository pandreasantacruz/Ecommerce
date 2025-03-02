import React from "react";
import Landing from "../views/Landing";
import Footer from "../components/navbar&footer/footer";

const landing = () => {
  return (
    <div>
      <div className=" font-poppins mb-1">
        <Landing />
      </div>
      <Footer></Footer>;
    </div>
  );
};

export default landing;
