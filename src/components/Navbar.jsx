import React, { useState } from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-20 z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          {/* NAV LINK LIST  */}
          <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="support"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="platform"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Platform
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        {/* NAV LINK LIST  END*/}

        {/* NAV BUTTONS */}
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        {/* NAV BUTTONS END*/}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            to="support"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            to="platform"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Platform
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Pricing
          </Link>
        </li>

        {/*  <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li> */}
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            SIgn In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
