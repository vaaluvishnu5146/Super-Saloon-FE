import React from "react";
import {
  HiHome,
  HiOutlineCalendarDays,
  HiReceiptPercent,
  HiUser,
} from "react-icons/hi2";
import "./bottombar.css";
import { useNavigate } from "react-router-dom";

const BOTTOM_ROUTES = [
  {
    id: "1",
    path: "/home",
    label: "Home",
    Icon: HiHome,
  },
  {
    id: "2",
    path: "/bookings",
    label: "Bookings",
    Icon: HiOutlineCalendarDays,
  },
  {
    id: "3",
    path: "/offers",
    label: "Offers",
    Icon: HiReceiptPercent,
  },
  {
    id: "4",
    path: "/account",
    label: "Account",
    Icon: HiUser,
  },
];

function BottomBar() {
  const navigate = useNavigate();

  function handleNavigate(path = "/") {
    if (path) {
      navigate(path);
    }
  }

  return (
    <div
      className="bottom_bar"
      style={{
        background: "#F17689",
      }}
    >
      {BOTTOM_ROUTES.map((Route, index) => (
        <div
          className="nav-button"
          key={`${Route.label}=${Route.id}-${index}`}
          onClick={() => handleNavigate(Route.path)}
        >
          <Route.Icon />
        </div>
      ))}
    </div>
  );
}

export default BottomBar;
