import React from "react";
import LeftSide from "../components/capsolute/leftSide/LeftSide";
import RightSide from "../components/capsolute/rightSide/RightSide";

const Capsolute = () => {
  return (
    <div className="row capsolute  ">
      <div className="col-md-8 pt-4">
        <RightSide />
      </div>
      <div className="col-md-4 ">
        <LeftSide />
      </div>
    </div>
  );
};

export default Capsolute;
