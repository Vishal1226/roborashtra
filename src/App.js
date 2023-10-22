import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Aditya from "./pages/Aditya";
import Vishal from "./pages/Vishal";
import Trapti from "./pages/Trapti";
import Shreeram from "./pages/Shreeram";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shreeram />} />
          <Route path="/aditya" element={<Aditya />} />
          <Route path="/vishal" element={<Vishal />} />
          <Route path="/trapti" element={<Trapti />} />
          <Route path="/abhishek" element={<Trapti />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
