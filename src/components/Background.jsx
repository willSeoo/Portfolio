import React from "react";
import LiquidChrome from "./Squares";
import Squares from "./Squares";

const Background = () => {
  return (
    <>
      {/* Mobile Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 block min-[1250px]:hidden">
        <Squares
          speed={0.2}
          squareSize={50}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
    </>
  );
};

export default Background;
