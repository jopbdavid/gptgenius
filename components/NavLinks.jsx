import React from "react";
import Link from "next/link";

const links = [
  {
    label: "Chat",
    href: "/chat",
  },
  {
    label: "Tours",
    href: "/tours",
  },
  {
    label: "New Tour",
    href: "/tours/new-tour",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

const NavLinks = () => {
  return (
    <ul className="menu  text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="capitalize">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
