"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const EmailLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link
              className={pathname === "/email/inbox" ? "btn btn-success" : ""}
              href="/email/inbox"
            >
              Inbox
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/email/allMail" ? "btn btn-success" : ""}
              href="/email/allMail"
            >
              AllMail
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmailLayout;
