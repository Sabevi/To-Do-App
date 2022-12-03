import { Routes, Route } from "react-router-dom";
import ToDoList from "./pages/ToDoList/ToDoList";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDoList/>} />
    </Routes>
  );
}

export default App;
