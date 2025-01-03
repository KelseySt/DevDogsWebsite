"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavBar.css";
import Button from "./Button";
import name2 from "../images/mascotwordlight.png";
import logoOnly from "../images/logo.png";
import blackOutline from "../images/BlackOutlineLogo.png";
import whiteOutline from "../images/WhiteOutlineLogo.png";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";
import NavBarAvatar from "./NavbarAvatar";


const navLinks = [
  { name: "Home", path: "/", isDropdown: false },
  { name: "About", path: "/about", isDropdown: false },
  { name: "Team", path: "/about/people", isDropdown: false },
  { name: "Projects", path: "/about/projects", isDropdown: false },
  { name: "Events", path: "/about/events", isDropdown: false },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getLinkClasses = (path) => {
    return `text-xl px-3 no-underline font-semibold hover:text-[#FF4583] ${
      pathname === path
        ? "text-white "
        : "hover:text-[#FF4583]"
    }`;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex w-full flex-col items-center justify-around p-[.8rem] font-semibold text-white sm:flex-row">
      <div className="sm:hidden sm:w-[300px] md:block">
        <Link href="/">
        <div className="flex gap-2">
          <Image
            src={whiteOutline}
            alt="Mascot and DevDogs"
            className="hidden h-[2.8em] w-auto md:block"
          />
          <p className="hidden text-4xl mt-0.5 md:block">DevDogs</p>
          </div>
        </Link>
      </div>
      <div className="flex w-full items-center justify-between px-0 sm:hidden">
        <div className="flex gap-6">
        {isDropdownOpen ? (
          <div className="flex flex-row">
            
            <XMarkIcon
              className="ml-3 w-[2rem] cursor-pointer transition-transform"
              onClick={toggleDropdown}
            />
          </div>
        ) : (
          <div className="flex flex-row">
            
            <Bars3Icon
              className="ml-3 w-[2rem] cursor-pointer transition-transform"
              onClick={toggleDropdown}
            />
          </div>
        )}
        <Link href="/">
          <Image
            src={whiteOutline}
            alt="Mascot"
            className="h-[3em] w-auto sm:h-[4em]"
          />
        </Link>
        </div>
        
        <NavBarAvatar />
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-[4rem] z-10 flex w-full flex-col items-start space-y-2 bg-[#331B33] px-4 py-4 sm:hidden"
        >
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`${getLinkClasses(path)} w-full rounded-md bg-[#331B33] bg-opacity-5 p-4 text-center hover:text-[#FF4583] text-[2rem] transition delay-100 ease-out`}
            >
              <p>{name}</p>
            </Link>
          ))}
        </div>
      )}
      <div className="hidden flex-nowrap items-center justify-center sm:flex sm:gap-3">
        {navLinks.map(({ name, path }) => (
          <Link key={name} href={path} className={getLinkClasses(path)}>
            <p className="= m-0 p-0 text-center transition delay-150 ease-in-out">
              {name}
            </p>
          </Link>
        ))}
      </div>
      <div className="invisible flex flex-row items-center align-middle lg:visible">
        <Link
          target="_blank"
          href="https://discord.com/invite/MuyJ4f5xKE"
          className="delay-50 hidden rounded-full bg-[#FF4583] p-2 text-lg font-semibold text-white transition ease-in-out hover:bg-white hover:text-[#331B33] md:text-xl lg:text-2xl lg:block"
        >
          <Button>Join Us</Button>
        </Link>
        <div className="hidden md:block">
          <NavBarAvatar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
