import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
import ShowBooks from "./pages/ShowBooks";
import CreateBooks from "./pages/CreateBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/deletebooks/:id" element={<DeleteBooks />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/editbooks/:id" element={<EditBooks />}></Route>
      <Route path="/createbooks" element={<CreateBooks />}></Route>
      <Route path="/Showbooks/:id" element={<ShowBooks />}></Route>
    </Routes>
  );
};

export default App;
