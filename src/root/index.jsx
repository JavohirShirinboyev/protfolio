import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/works" element={<h1>Works</h1>} />
        <Route path="/about" element={<h1>About Me</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
