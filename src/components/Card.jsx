import React from "react";
import Image from "../assets/images/illustration-hero.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  const CardContent = {
    title: "Order Summary",
    description:
      "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
    plan: "Annual Plan",
    price: "$59.99/year",
    change: "Change",
  };

  return (
    <div className="card w-80 h-auto rounded-xl shadow-xl overflow-hidden ">
      <img
        src={Image}
        alt=""
        className="relative top-0 w-full h-40 object-cover"
      />
      <div className="card-body p-8 flex flex-col text-sm">
        <h2 className="card-title text-2xl font-bold text-center text-darkBlue mb-6">
          {CardContent.title}
        </h2>
        <p className="text-center text-darkBlue">{CardContent.description}</p>
        <div className="flex flex-col">
          <div className="flex justify-between items-center my-6 p-2 rounded-md ">
            <div className="flex gap-4 items-center">
              <FontAwesomeIcon
                icon={faMusic}
                className="text-desaturatedBlue h-auto w-6 rounded-full p-2 bg-paleBlue"
              />
              <div className="flex flex-col text-darkBlue">
                <span className="font-bold ">{CardContent.plan}</span>
                <span>{CardContent.price}</span>
              </div>
            </div>
            <a href="#" className="text-blue-700 underline font-semibold">
              {CardContent.change}
            </a>
          </div>
          <div className="btn-container flex flex-col gap-2">
            <button className="py-2 px-4 rounded-lg bg-blue-700 text-white hover:bg-blue-600 font-bold">
              Proceed to Payment
            </button>
            <button className="py-2 px-4 rounded-lg text-darkBlue bg-white font-bold">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
