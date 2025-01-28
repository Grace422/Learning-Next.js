import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Hamgurg = ({ closeNavbar: string }) => {
    const pathname = usePathname();
  return (
    <div>
      <Image
        src="/assets/shared/icon-close.svg"
        alt="close"
        width={40}
        height={40}
        className="sm:hidden"
        onClick={closeNavbar}
      />

      <div>
      <ul className="hidden navbar-links sm:flex items-center justify-start space-x-4 text-white">
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
  );
};

export default Hamgurg;
