import { Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import ToDo from "./pages/ToDo/ToDo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDo />} />
    </Routes>
  );
}

export default App;
