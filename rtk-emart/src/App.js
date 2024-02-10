import LandingPage from "./stores/pages/LandingPage";
import React from "react";
import { Routes,Route } from "react-router-dom";
import MobilePage from "./stores/pages/MobilePage";
import ComputerPage from "./stores/pages/ComputerPage";
import MobileSinglePage from "./stores/singles/MobileSinglePage";
import ComputerSinglePage from "./stores/singles/ComputerSinglePage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/mobiles" element={<MobilePage/>} />
        <Route path="/computers" element={<ComputerPage/>} />
        <Route path="/mobiles/:id" element={<MobileSinglePage/>} />
        <Route path="/computers/:id" element={<ComputerSinglePage/>} />
      </Routes>
    </div>
  );
}

export default App;
