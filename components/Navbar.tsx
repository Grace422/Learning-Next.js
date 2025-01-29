"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div className="absolute w-full top-10 flex justify-between items-center">
      <div>
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="pt-10 ml-10 sm:ml-20 sm:pt-0"
        />
      </div>
      <div>
        {!isOpen ? (
          <Image
            src="/assets/shared/icon-hamburger.svg"
            alt="menu"
            width={40}
            height={40}
            className="mr-10 pt-10 sm:hidden"
            onClick={toggleNavbar}
          />
        ) : (
          <Image
            src="/assets/shared/icon-close.svg"
            alt="menu"
            width={40}
            height={40}
            className="mr-10 pt-10 sm:hidden"
            onClick={closeNavbar}
          />
        )}
      </div>
      <div className="hidden sm:flex flex-grow">
        <div className="border-b border-slate-900 sm:flex flex-grow ml-40 z-10 relative left-5 bottom-10"></div>
        <div className="backdrop-blur-3xl bg-transparent p-7 relative w-1/2 z-0">
          <ul className="navbar-links sm:flex items-center justify-start space-x-4 text-white">
            <Link href="/">
              <li
                className={`relative text-white ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                00 Home{" "}
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`relative text-white ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                {" "}
                01 Destination{" "}
              </li>
            </Link>
            <Link href="/crew">
              <li
                className={`relative text-white ${
                  pathname === "/crew" ? "active" : ""
                }`}
              >
                {" "}
                02 Crew{" "}
              </li>
            </Link>
            <Link href="/technology">
              <li
                className={`relative text-white ${
                  pathname === "/technology" ? "active" : ""
                }`}
              >
                {" "}
                03 Technology{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>

      
    </div>
    {isOpen && (
        <div className="bg-slate-900 p-7 absolute w-1/2 h-full top-0 left-0 z-10">
          <ul className="sm:flex space-x-4 pt-10 text-white">
            <Link href="/">
              <li className="relative text-white" onClick={closeNavbar}>
                00 Home{" "}
              </li>
            </Link>
            <Link href="/about">
              <li className="relative text-white" onClick={closeNavbar}>
                01 Destination{" "}
              </li>
            </Link>
            <Link href="/crew">
              <li className="relative text-white" onClick={closeNavbar}>
                02 Crew{" "}
              </li>
            </Link>
            <Link href="/technology">
              <li className="relative text-white" onClick={closeNavbar}>
                03 Technology{" "}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
