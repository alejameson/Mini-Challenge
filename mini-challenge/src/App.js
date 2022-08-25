import React from "react";
import { Home } from "./components/Home/home";
import { Table } from "./components/Table/table";
import { Form } from "./components/Form/form";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
