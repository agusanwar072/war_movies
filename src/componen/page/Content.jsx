import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Grid from "../sections/Grid";
import Watch from "./Watch";
import { dummyData } from "../../data/Dummydatagrid";
import { useWatch } from "../contexts/WatchContext";
import Notfound from "../sections/Notfound";

const Content = () => {
  const navigate = useNavigate();
  const { setSelectedId } = useWatch();

  const handleClickItem = (id) => {
    setSelectedId(id);
    navigate(`/watch/${id}`);
  };

  return (
    <main className="flex-grow px-8 pt-4 pb-8  ">
      <Routes>
        <Route
          path="/"
          element={
            <Grid items={dummyData} limit={12} onClickItem={handleClickItem} />
          }
        />
        <Route
          path="/upcoming"
          element={
            <Grid items={dummyData} limit={12} onClickItem={handleClickItem} />
          }
        />
        <Route
          path="/popular"
          element={
            <Grid items={dummyData} limit={12} onClickItem={handleClickItem} />
          }
        />
        <Route
          path="/toprated"
          element={
            <Grid items={dummyData} limit={12} onClickItem={handleClickItem} />
          }
        />
        <Route path="/watch/:id" element={<Watch />} />
        {/* fallback untuk semua path yang tidak ada */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Watch items={dummyData} /> */}
      {/* <Grid items={dummyData} limit={12} /> */}
    </main>
  );
};

export default Content;
