"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const toogleMenu = () => setDropDown(!dropDown);

  return (
    <main className="bg-white w-full shadow shadow-gray-300">
    <nav className="h-12 flex justify-between items-center px-5 z-10">
      <h1 className="text-3xl font-bold">Manu-app</h1>
      <ul className="hidden md:flex md:gap-8 md:text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Profile</li>
      </ul>
      <div className="hidden md:block ">
        <Button variant="contained">Login</Button>
      </div>
      <div className="block md:hidden lg:hidden">
        <GiHamburgerMenu
          onClick={toogleMenu}
          className="text-3xl text-blue-500"
        />
      </div>
      
    </nav>
    { dropDown && (
      <div className=" flex flex-col gap-5 justify-center items-center md:hidden">
        <ul className=" flex flex-col gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Profile</li>
        </ul>
        <Button variant="contained">Login</Button>
      </div> )}
    </main>
  );
}
