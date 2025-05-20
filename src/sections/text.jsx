import React from "react";
import ScrollVelocity from "../components/ScrollVelocity/ScrollVelocity.jsx";
const text = () => {
  return (
    //  {/* Velocity Text */}⁡
    <div>
      <ScrollVelocity
        texts={["Front-End", "Graphic Design", "Live a little"]}
        velocity={30}
        className="custom-scroll-text "
      />
    </div>
  );
};

export default text;
