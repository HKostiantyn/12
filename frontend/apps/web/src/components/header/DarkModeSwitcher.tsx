import React from "react";
import { useColorMode } from "../../context/ColorModeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiSunBold } from "react-icons/pi";

const DarkModeSwitcher = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className="flex align-center h-7 my-auto mx-6">
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full text-black ${
          colorMode === "dark" ? "bg-slate-500" : "bg-blue-500"
        }`}
      >
        <input
          type="checkbox"
          onChange={() => {
            if (typeof setColorMode === "function") {
              const newMode = colorMode === "light" ? "dark" : "light";
              setColorMode(newMode);
              console.log("Color mode changed to:", newMode);
            }
          }}
          className="dur z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
            colorMode === "dark" && "!right-[3px] !translate-x-full"
          }`}
        >
          <span className={` ${colorMode === "dark" || "hidden"} `}>
            <MdOutlineDarkMode />
          </span>
          <span className={`${colorMode === "light" || "hidden"}`}>
            <PiSunBold />
          </span>
        </span>
      </label>
    </div>
  );
};

export default DarkModeSwitcher;
