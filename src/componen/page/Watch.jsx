import React from "react";
import { useParams } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";
import { dummyData } from "../../data/Dummydatagrid";

const Watch = () => {
  const { id } = useParams(); // ambil id dari URL
  const { selectedId } = useWatch();
  // tentukan id mana yang dipakai: context atau URL
  const watchId = selectedId || parseInt(id);

  const item = dummyData.find((i) => i.id === watchId);

  if (!item) {
    return <p className="p-6">Data tidak ditemukan...</p>;
  }

  return (
    <div>
      <div className="w-full md:max-w-3xl lg:max-w-7xl  mx-auto flex flex-col ">
        <div className="aspect-video">
          <iframe
            class="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/cLx3tyzht3Y?list=PLJP5_qSxMbkL_D02wuRBMZ9Di2wer1FjQ"
            title={item.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-left mt-6">
          <h1 className="text-4xl ">{item.title}</h1>
          <div className="flex mt-2 bg-amber-100 items-center">
            {item.icon()}
            <p className="text-xl ml-1">{item.rating}</p>
          </div>
          <p className="text-lg mt-1 bg-amber-200 ">popularity : 123.2131</p>
          <hr className="border-2 mt-1 border-black" />
          <div className="mt-1 bg-red-400">
            <p className="text-lg  bg-amber-300">Genre </p>
            <ul className=" grid grid-cols-6 gap-6 px-6 py-2">
              <li className=" bg-teal-400 text-center rounded-md ">Drama</li>
              <li className=" bg-teal-400 text-center rounded-md">Action</li>
              <li className=" bg-teal-400 text-center rounded-md">Comedy</li>
            </ul>
          </div>
          <p className="text-lg mt-1 bg-amber-400">Realease : 2025-07-18</p>
          <p className="text-lg mt-1 bg-amber-500">
            Production : ufotableAniplexShueisha
          </p>
          <p className="text-lg mt-1 bg-amber-600">Overview : {item.descrip}</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
