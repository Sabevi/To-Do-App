import { Routes, Route } from "react-router-dom";
import ToDoList from "./pages/ToDoList/ToDoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDoList />} />
    </Routes>
  );
}

export default App;
