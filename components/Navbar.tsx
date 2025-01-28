"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
      <div className="absolute w-full top-10 flex justify-between items-center" >
        <div>
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="ml-5 sm:ml-20"
          />
        </div>
        <div className="border-b border-slate-800 flex-grow ml-40 z-10 relative left-5 top-0"></div>
        <div className="backdrop-blur-3xl bg-transparent p-7 relative w-1/2 z-0">
          <ul className="navbar-links flex items-center justify-start space-x-4 text-white">
            <Link href="/">
              <li className={`relative text-white ${pathname === "/" ? "active" : ""}`}>00 Home </li>
            </Link>
            <Link href="/about">
              <li className={`relative text-white ${pathname === "/about" ? "active" : ""}`}> 01 Destination </li>
            </Link>
            <Link href="/crew">
              <li className={`relative text-white ${pathname === "/crew" ? "active" : ""}`}> 02 Crew </li>
            </Link>
            <Link href="/technology">
              <li className={`relative text-white ${pathname === "/technology" ? "active" : ""}`}> 03 Technology </li>
            </Link>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
