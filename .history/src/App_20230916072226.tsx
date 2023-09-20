import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UrlopApp from "./pages/urlopApp/urlopApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UrlopApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
