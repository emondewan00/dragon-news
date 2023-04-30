import React from "react";
import MoreNews from "./MoreNews";

const Category = () => {
  return (
    <div>
      <ul className="space-y-5">
        <li className="text-xl text-slate-500">bracking news </li>
        <li className="text-xl text-slate-500">bracking news</li>
        <li className="text-xl text-slate-500">bracking news</li>
        <li className="text-xl text-slate-500">bracking news</li>
        <li className="text-xl text-slate-500">bracking news</li>
      </ul>
      <MoreNews />
      <MoreNews />
      <MoreNews />
    </div>
  );
};

export default Category;
