import React from "react";
import LeftSide from "../components/home/leftSide/LeftSide";
import RightSide from "../components/home/rightSide/RightSide";
const Home = () => {
  return (
    <div className="row Home  ">
      <div className="col-md-8 pt-4">
        <RightSide />
      </div>
      <div className="col-md-4 ">
        <LeftSide />
      </div>
    </div>
  );
};

export default Home;
