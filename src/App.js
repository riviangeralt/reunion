import React from "react";
import "./App.css";
import Header from "components/common/Header";
import Dashboard from "views/Dashboard";
import { Routes, Route } from "react-router-dom";
import Favourite from "views/Favourite";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/fav" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
