import React from "react";
import { FaBookmark, FaEye, FaShareAlt, FaStar, FaUser } from "react-icons/fa";
import newsImg from "./assets/1.png";

const DragonNews = () => {
  return (
    <div className="card card-bordered ">
      <div className="bg-gray-100 rounded-t-xl p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaUser />
          <div>
            <p>Awlad Hossain</p>
            <p>22-2-2022</p>
          </div>
        </div>
        <div className="flex space-x-4 ">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="card-body border-b">
        <p className="card-title">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </p>
        <img src={newsImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          doloribus eum. Pariatur quod amet consequuntur enim rerum nulla
          corrupti accusamus ab delectus, excepturi ducimus ipsa perferendis
          explicabo assumenda doloribus culpa similique deserunt perspiciatis
          molestiae! Dicta aliquam, voluptates quasi natus veritatis eaque
          libero corrupti quidem, laboriosam asperiores ducimus eveniet facere
          eligendi praesentium optio, non dolore reprehenderit aut. Autem vel
          magnam veritatis mollitia ad velit voluptatum perferendis suscipit
          sequi fuga. Explicabo odit quos placeat, magni nam a quia, omnis fuga
          cumque impedit quaerat voluptatem, perspiciatis incidunt quo saepe
          voluptate consequatur? Nemo rem suscipit totam nostrum illum
          laudantium. Voluptatum consectetur reprehenderit architecto
          necessitatibus.
          <button className="text-warning font-bold">Read More</button>
          
        </p>
      </div>
      <div className="p-6 flex space-x-2 items-center justify-between">
        <div className="flex space-x-2 items-center ">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <p>4.9</p>
        </div>
        <div className="flex space-x-2 items-center ">
          <FaEye />
          <p>499</p>
        </div>
      </div>
    </div>
  );
};

export default DragonNews;
