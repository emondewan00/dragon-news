import React from "react";
import logo from "./assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center space-y-2">
        <img src={logo} className="mx-auto" alt="" />
        <p className="text-lg">Journalism Without Fear or Favour</p>
        <p className="text-xl font-semibold">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="flex items-center bg-slate-100 mt-4 py-4 px-2 rounded">
        <button className="btn btn-error">Latest</button>
        <Marquee>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            id alias velit amet quidem, laudantium totam consectetur praesentium
            exercitationem atque. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Et odit atque quaerat est praesentium omnis nemo
            aliquid, minus non explicabo magni, voluptates mollitia consequuntur
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
