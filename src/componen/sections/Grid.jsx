import React from "react";
import { useNavigate } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";
import Watch from "../page/Watch";
import { useState, useEffect } from "react";
import { dummyData } from "../../data/Dummydatagrid";

const Grid = ({ items, limit, onClickItem }) => {
  const displayItems = limit ? items.slice(0, limit) : items; // ambil sesuai limit
  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 32 32"
      className="w-8 h-8"
    >
      <path
        fill="#FCD53F"
        d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"
      />
    </svg>
  );

  return (
    <div className="pt-8 grid grid-cols-3 xl:grid-cols-4 xl2:grid-cols-6 gap-7">
      {displayItems.map((item) => (
        <div
          key={item.id}
          onClick={() => onClickItem(item.id)} // klik item
          className="bg-grey text-white  rounded-lg p-1 hover:scale-110 cursor-pointer duration-300"
        >
          <div className="w-full:">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              className="w-full h-full rounded-t-lg rounded-b-md object-cover"
            />
          </div>
          <div className="mt-1 flex flex-col text-left">
            <h1 className="text-2xl font-bold mb-1 line-clamp-2  h-[68px]">
              {item.title}
            </h1>
            <div className="flex items-center mb-1">
              {starIcon}
              <p>{item.vote_average}</p>
            </div>
            <p className="line-clamp-2">{item.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
