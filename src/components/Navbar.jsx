import React from "react";
import HamburgerIcon from "./ui/HamburgerIcon";
import Logo from "./ui/Logo";
import { assets } from "../Assets/assets";
import Input from "./ui/Input";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 w-full h-1/13 flex gap-1 bg-white">
      {/*  Left section*/}
      <HamburgerIcon />
      <Logo />
      <Input />

      {/* Right section */}
      <div className="ml-auto mr-4 flex items-center gap-6 pr-4">
        {/* Refresh Icon */}
        <button className="p-2 cursor-pointer rounded-full hover:bg-gray-200">
          <img src={assets.refresh} alt="refresh" className="w-6 h-6" />
        </button>

        {/* Grid Icon */}
        <button className="p-2 cursor-pointer rounded-full hover:bg-gray-200">
          <img src={assets.grid} alt="apps" className="w-6 h-6" />
        </button>

        {/* Settings Icon */}
        <button className="p-2 cursor-pointer rounded-full hover:bg-gray-200">
          <img src={assets.settings} alt="settings" className="w-6 h-6" />
        </button>

        {/* User Avatar */}
        <button className="p-1 cursor-pointer rounded-full hover:bg-gray-200">
          <img
            src={assets.profile}
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
