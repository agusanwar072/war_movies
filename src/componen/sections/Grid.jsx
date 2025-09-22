import React from "react";

const Grid = ({ items, limit }) => {
  const displayItems = limit ? items.slice(0, limit) : items; // ambil sesuai limit

  return (
    <div className="pt-8 grid grid-cols-4 gap-8">
      {displayItems.map((item) => (
        <div
          key={item.id}
          className="bg-teal-400 border-2 rounded-lg p-1 hover:scale-110 cursor-pointer duration-300"
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
              {item.star}
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
