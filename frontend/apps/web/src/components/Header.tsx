import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails } from "../store/authSlice";
import { setUserDetails } from "../store/authSlice";
import { RootState } from "../store";
import { FaFilter } from "react-icons/fa6";
import DarkModeSwitcher from "./header/DarkModeSwitcher";
import { useColorMode } from "../context/ColorModeContext";
import {
  FaGlobe,
  FaRegNewspaper,
  FaChevronDown,
  FaChevronUp,
  FaMoneyBillAlt,
  FaSearch,
} from "react-icons/fa";
import { RiDiscussFill } from "react-icons/ri";
import { AiFillEuroCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const Header: React.FC = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const avatar = useSelector((state: RootState) => state.auth.avatar);

  useEffect(() => {
    const fetchUserLevel = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();

        dispatch(
          setUserDetails({
            userId: userData._id || null,
            admin: userData.admin || false,
            username: userData.username || null,
            email: userData.email || null,
            level: userData.level || null,
            stripeSessionId: userData.stripeSessionId || null,
            token: userData.token || null,
            avatar: userData.avatar || null,
          })
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserLevel();
    }
  }, []); // Add userId as a dependency
  const avatarUrl = avatar
    ? `${import.meta.env.VITE_BACKEND_URL}${avatar}`
    : `${import.meta.env.VITE_BACKEND_URL}/uploads/user-menu-icon.png`;

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleMouseEnter = (menuTitle: string) => {
    setActiveMenu(menuTitle);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    try {
      dispatch(clearUserDetails());
      // localStorage.clear();
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
      svg: <FaFilter className="ml-3 w-5 h-5 mr-1 " />,
    },
    {
      title: "Market",
      to: "/market",
      svg: <FaGlobe className="ml-3 w-5 h-5 mr-1" />,
    },
    {
      title: "Entitlements",
      submenu: [
        {
          title: "Dividend",
          to: "/dividend",
        },
        {
          title: "Share Issued",
          to: "/shareissue",
        },
      ],
      svg: <AiFillEuroCircle className="ml-3 w-5 h-5 mr-1" />,
    },
    {
      title: "Financial",
      to: "/financial",
      svg: <FaMoneyBillAlt className="ml-3 w-5 h-5 mr-1" />,
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
      svg: <FaRegNewspaper className="ml-3 w-5 h-5 mr-1" />,
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
      svg: <RiDiscussFill className="ml-3 w-5 h-5 mr-1" />,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-10 shadow-md pt-6 pb-2 ${
        colorMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`flex ${
          colorMode === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        } container mx-auto`}
      >
        <div className="relative min-w-[210px]">
          <Link to="/">
            <img src="/logolight.svg" alt="Logo" className="h-10" />
          </Link>
        </div>
        <div className="relative select-none text-center  ml-auto hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {isOpen ? (
                <BsThreeDots className="w-8 h-8" />
              ) : (
                <IoMenu className="w-8 h-8" />
              )}
            </span>
          </button>
        </div>

        <div className=" hidden lg:inline-flex xl:inline-flex 2xl:inline-flex">
          <div className="relative md:flex pl-10 mx-auto w-[250px] gap-2 hidden">
            <div className="relative w-[250px] min-w-[200px] h-10 min-w-[200px]">
              <input
                type="search"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 pr-20"
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Tick Stock Symbol{" "}
              </label>
            </div>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none !absolute right-1 top-1 rounded"
              type="button"
            >
              <FaSearch />
            </button>
          </div>

          <div className="flex-none pt-2">
            <ul className="menu menu-horizontal items-center">
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.title}
                  className="relative group"
                  onMouseEnter={() =>
                    menuItem.submenu && handleMouseEnter(menuItem.title)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="cursor-pointer px-3 flex text-md items-center group-hover:text-blue-500 ">
                    {menuItem.svg}
                    {/* Hide title for screen width over 1550px */}
                    <span className="hidden lg:hidden xl:hidden 2xl:inline-block 3xl:inline-block">
                      {menuItem.title}
                    </span>
                    {menuItem.submenu ? (
                      activeMenu === menuItem.title ? (
                        <FaChevronUp className="ml-1" />
                      ) : (
                        <FaChevronDown className="ml-1" />
                      )
                    ) : null}
                  </div>
                  {menuItem.submenu && activeMenu === menuItem.title && (
                    <ul className={`absolute ${
                      colorMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                    } rounded-lg shadow-md  p-2 z-10`}>
                      <div className="mt-5">
                        {menuItem.submenu.map((submenuItem, subIndex) => (
                          <li className="w-40" key={subIndex}>
                            <Link
                              to={submenuItem.to}
                              className={`flex block px-2 py-1 h-10 ${
                                colorMode === "dark" ? "hover:bg-blue-600 text-white" : "hover:bg-blue-100 text-black"
                              } rounded`}
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 mx-3">
            {!userId ? (
              <>
                <Link
                  to="/login"
                  className="w-[100px] align-middle mx-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none h-10 text-md py-2 px-4 rounded-lg  hover:bg-gray-900/10 active:bg-gray-900/20 hidden xl:inline-block"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="w-[100px] flex align-middle select-none font-sans font-bold text-center h-10 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] hidden lg:inline-block"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  className="w-[100px] ml-5 flex align-middle select-none font-sans font-bold text-center h-10 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] hidden lg:inline-block"
                >
                  Logout
                </button>
                <button
                  onClick={handleProfileClick}
                  className="ml-5 w-10 h-10 bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={avatarUrl}
                    alt="Preview"
                    className="object-cover w-full h-full "
                  />
                </button>
              </>
            )}
          </div>
          <DarkModeSwitcher />
        </div>
      </div>

      {isOpen ? (
        <div className="block w-full  lg:hidden xl:hidden 2xl:hidden">
          <ul className="menu menu-vertical px-1 items-center w-[30%] m-auto pl-10  justify-start">
            {menuItems.map((menuItem) => (
              <div
                key={menuItem.title}
                className="relative group w-full pt-5"
                onMouseEnter={() =>
                  menuItem.submenu && handleMouseEnter(menuItem.title)
                }
                onMouseLeave={handleMouseLeave}
              >
                <div className="cursor-pointer flex text-md items-center group-hover:text-blue-500 ">
                  {menuItem.svg}

                  {menuItem.title}

                  {menuItem.submenu ? (
                    activeMenu === menuItem.title ? (
                      <FaChevronUp className="ml-1" />
                    ) : (
                      <FaChevronDown className="ml-1" />
                    )
                  ) : null}
                </div>
                {menuItem.submenu && activeMenu === menuItem.title && (
                  <ul className="absolute bg-base-100 rounded-lg shadow-md  p-2 z-10">
                    <div className="mt-5">
                      {menuItem.submenu.map((submenuItem, subIndex) => (
                        <li className="w-40" key={subIndex}>
                          <Link
                            to={submenuItem.to}
                            className="block px-2 py-1 h-10 hover:bg-blue-100 rounded"
                          >
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </div>
            ))}
          </ul>

          <div>
            {!userId ? (
              <div className="flex items-center gap-x-1">
                <Link
                  to="/login"
                  className="min-w-[150px] align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 block"
                >
                  <span>Log In</span>
                </Link>
                <Link
                  to="/signup"
                  className="min-w-[150px] align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block"
                >
                  <span>Sign Up</span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-x-1">
                <button
                  onClick={handleLogout}
                  className="min-w-[150px] align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block"
                >
                  Logout
                </button>
                <button
                  onClick={handleProfileClick}
                  className="min-w-[150px] align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 block"
                >
                  My Profile
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {/* 
        <>
         
        </> */}
    </header>
  );
};

export default Header;
