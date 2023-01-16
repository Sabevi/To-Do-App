import React, { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import ToDo from "./pages/ToDo/ToDo";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDo />} />
    </Routes>
  );
}

export default App;
