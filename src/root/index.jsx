import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
