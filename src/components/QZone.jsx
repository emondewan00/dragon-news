import React from "react";
import qZone1 from "./assets/qZone1.png";
import qZone2 from "./assets/qZone2.png";
import qZone3 from "./assets/qZone3.png";
const QZone = () => {
  return (
    <div className="bg-gray-100 px-14 py-6 rounded-sm">
      <h1 className="text-xl font-semibold">Q-Zone</h1>
      <div className="space-y-4 ">
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
