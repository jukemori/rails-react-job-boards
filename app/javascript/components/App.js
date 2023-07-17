import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import Board from "./Board";

const App = () => (
  <Routes>
    <Route path="jobs/*" element={<Board />} />
  </Routes>
);

export default App;
