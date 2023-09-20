import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import UrlopApp from './pages/urlopApp/urlopApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <UrlopApp />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
