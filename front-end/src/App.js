import { Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo/ToDo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDo/>} />
    </Routes>
  );
}

export default App;
