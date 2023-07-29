import React from "react";
import "./style.css";

import Onboarding from "./Pages/Onboarding";
import Home from "./Pages/Home";
import Bookings from "./Pages/Bookings";
import Offers from "./Pages/Offers";
import Account from "./Pages/Account";

import BottomBar from "./Components/BottomBar/BottomBar";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Onboarding} />
        <Route path="/home" Component={Home} />
        <Route path="/bookings" Component={Bookings} />
        <Route path="/offers" Component={Offers} />
        <Route path="/account" Component={Account} />
      </Routes>
      <BottomBar />
    </div>
  );
}
