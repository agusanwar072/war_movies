import React from "react";
import { useNavigate } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";
import Watch from "../page/Watch";

const Grid = ({ items, limit, onClickItem }) => {
  const displayItems = limit ? items.slice(0, limit) : items; // ambil sesuai limit

  return (
    <div className="pt-8 grid grid-cols-4 xl:grid-cols-6 gap-8">
      {displayItems.map((item) => (
        <div
          key={item.id}
          onClick={() => onClickItem(item.id)} // klik item
          className="bg-grey text-white  rounded-lg p-1 hover:scale-110 cursor-pointer duration-300"
        >
          <div className="w-full aspect-[3/4]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-t-lg rounded-b-md object-cover"
            />
          </div>
          <div className="mt-1 flex flex-col text-left">
            <h1 className="text-2xl font-bold mb-1">{item.title}</h1>
            <div className="flex items-center mb-1">
              {item.icon()}
              <p>{item.rating}</p>
            </div>
            <p className="">{item.descrip}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
