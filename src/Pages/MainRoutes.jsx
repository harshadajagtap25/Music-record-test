import React from "react";
import { Routes, Route } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import EditMusicRecord from "./EditMusicRecord";
import Home from "./Home";
import Login from "./Login";
import SingleMusicRecord from "./SingleMusicRecord";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/music/:id"
        element={
            <SingleMusicRecord />
        }
      />
      <Route
        path="/music/:id/edit"
        element={
          <ReqAuth>
            <EditMusicRecord />
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
