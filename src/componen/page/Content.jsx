import React from "react";
import Grid from "../sections/Grid";
import { dummyData } from "../../data/Dummydatagrid";

const Content = () => {
  return (
    <main className="flex-grow px-8 pt-4 pb-8  bg-gray-200">
      <div className="text-left w-full">
        <h1 className="text-3xl">Selamat Datang...!!!</h1>
      </div>
      <Grid items={dummyData} limit={12} />
    </main>
  );
};

export default Content;
