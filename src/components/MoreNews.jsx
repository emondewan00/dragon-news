import React from "react";
import img1 from "./assets/1.png";
import { FaCalendar } from "react-icons/fa";

const MoreNews = () => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-4">
      <figure>
        <img src={img1} alt="" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className=" justify-end">
          <p>
            Sports{" "}
            <span className="text-gray-500 ms-2">
              {" "}
              <FaCalendar className="inline me-2" />
              jan 4,2022
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreNews;
