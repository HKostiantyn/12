import React, { useState, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logolight from "../assets/logolight.svg";

const Header: React.FC = () => {

  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const menuItems = [
    {
      title: "Screener",
      submenu: [
        {
          title: "Stock Screener",
          to: "/stscreen",
        },
        {
          title: "Warrant Screener",
          to: "/wascreen",
        },
      ],
      svg: (
        <div className="h-5 w-5 bg-blue-500 rounded-md shadow-md"></div>
      ),
    },
    {
      title: "Market",
      to: "/market",
      svg: (
        <div className="h-5 w-5 bg-green-500 rounded-md shadow-md"></div>
      ),
    },
    {
      title: "News",
      submenu: [
        {
          title: "News",
          to: "/news",
        },
        {
          title: "Announcements",
          to: "/announcements",
        },
      ],
      svg: (
        <div className="h-5 w-5 bg-red-500 rounded-md shadow-md"></div>
      ),
    },
    {
      title: "Discussions",
      submenu: [
        {
          title: "Comments",
          to: "/comments",
        },
        {
          title: "Ideas",
          to: "/ideas",
        },
      ],
      svg: (
        <div className="h-5 w-5 bg-yellow-500 rounded-md shadow-md"></div>
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md py-2">
    {/* Navbar with DaisyUI */}
    <div className="navbar bg-base-100 container mx-auto px-4">
      {/* Logo Section */}
      <div className="flex-1">
        <Link to="/">
          <img src={Logolight} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 items-center">
          {menuItems.map((menuItem, index) =>
            menuItem.submenu ? (
              <li key={index} className="dropdown dropdown-end">
                <details>
                  <summary className="cursor-pointer">{menuItem.title}</summary>
                  <ul className="bg-base-100 rounded-lg shadow-md p-2">
                    {menuItem.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={submenuItem.to}
                          className="px-2 py-1 hover:bg-blue-100 rounded"
                        >
                          {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={index}>
                <Link
                  to={menuItem.to as string}
                  className="px-3 py-1 hover:text-blue-500 text-sm"
                >
                  {menuItem.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Login/Logout Buttons */}
      <div className="flex items-center gap-2">
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="btn btn-ghost text-blue-500 hover:text-blue-700 px-3 py-1 border rounded-md"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary text-white px-3 py-1 border rounded-md"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-success text-white px-3 py-1 border rounded-md"
            >
              Logout
            </button>
            <button
              onClick={handleProfileClick}
              className="btn btn-accent text-white px-3 py-1 border rounded-md"
            >
              My Profile
            </button>
          </>
        )}
      </div>
    </div>
  </header>
  );
};

export default Header;
