import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Find Us On </h1>
      <ul className="wext-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <li className=" px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <FaFacebookF className="inline me-2" /> Facebook
        </li>
        <li className=" px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <span>
            <FaTwitter className="inline me-2" />
            Twitter
          </span>
        </li>
        <li className=" px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <span>
            <FaInstagram className="inline me-2" /> Instagram
          </span>
        </li>
      </ul>
    </>
  );
};

export default FindUs;
