import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
      <div className="absolute w-full top-10 flex justify-between items-center" >
        <div>
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="ml-20"
          />
        </div>
        <hr className="text-white"/>
        <div className="backdrop-blur-3xl bg-transparent p-7 relative w-1/2">
          <ul className="flex items-center justify-start space-x-4 text-white">
            <Link href="/">
              <li className="text-white">00 Home </li>
            </Link>
            <Link href="/about">
              <li> 01 Destination </li>
            </Link>
            <Link href="/crew">
              <li> 02 Crew </li>
            </Link>
            <Link href="/technology">
              <li> 03 Technology </li>
            </Link>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
