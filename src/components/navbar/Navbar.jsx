"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const link = (
    <>
      <li>
        <Link
          className={pathname === "/" ? "bg-indigo-500 text-white" : ""}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/about" ? "bg-indigo-500 text-white" : ""}
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/profile" ? "bg-indigo-500 text-white" : ""}
          href="/profile"
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/friends" ? "bg-indigo-500 text-white" : ""}
          href="/friends"
        >
          Friends
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/email" ? "bg-indigo-500 text-white" : ""}
          href="/email"
        >
          Email Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
