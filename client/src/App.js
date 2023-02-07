import "./index.css";
import { useState } from "react";
import InputNote from "./components/InputNote";
import ListNotes from "./components/ListNotes";
import Login from "./loginform/Login";
import Register from "./loginform/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element= {<Register />} />
      <Route path="/mainpage" element= {<InputNote />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
