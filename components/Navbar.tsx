import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
      <div className="flex justify-between align-center m-6" >
        <div>
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </div>
        <hr className="bg-white"/>
        <div className="border-2 blur-sm bg-transparent p-4">
          <ul className="flex align-center justify-between space-x-4 text-white">
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
