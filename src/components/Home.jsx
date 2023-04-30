import React from "react";
import Category from "./Category";
import DragonNews from "./DragonNews";
import Login from "./Login";

const Home = () => {
  return (
    <div className="grid  md:grid-cols-12 container gap-x-5 mx-auto">
      <div className="col-span-3 ">
        <p className="text-xl font-semibold">All category</p>
        <Category />
      </div>
      <div className="col-span-6 ">
        <p className="text-xl font-semibold">Dragon News Home</p>
        <DragonNews />
      </div>
      <div className="col-span-3 ">
        <p className="text-xl font-semibold">Login with</p>
        <Login />
      </div>
    </div>
  );
};

export default Home;
