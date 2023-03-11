import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import NoPage from "./pages/statics/NoPage";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

            <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}




// initialisation
const content = document.getElementById('root');
const root = ReactDOM.createRoot(content);
root.render(<App />);
