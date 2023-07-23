import React from 'react';
import './style.css';
import Home from './Pages/Home';
import Bookings from './Pages/Bookings';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/bookings" Component={Bookings} />
      </Routes>
    </div>
  );
}
