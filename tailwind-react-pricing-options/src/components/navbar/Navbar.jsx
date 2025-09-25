//
import { Menu, Zap } from "lucide-react";
import { CircleX } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navigaitionData = [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/about",
      label: "About",
    },
    {
      id: 3,
      path: "/services",
      label: "Services",
    },
    {
      id: 4,
      path: "/products",
      label: "Products",
    },
    {
      id: 5,
      path: "/contact",
      label: "Contact",
    },
  ];
  const links = navigaitionData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between md:mx-10 mx-2 mt-4 ">
      <span className="flex gap-6" onClick={() => setOpen(!open)}>
        {open ? (
          <Menu className="md:hidden" />
        ) : (
          <CircleX className="md:hidden"></CircleX>
        )}
        <ul
          className={`absolute bg-amber-200 md:hidden duration-2000 rounded-sm text-black ${
            open ? "-top-40" : "top-10"
          }`}
        >
          {links}
        </ul>
        <h3 className="ml-4">My Navbar</h3>
      </span>

      {/* 01.. dainamic Navbar */}
      {/* <ul className="flex">
        {navigaitionData.map((route) => (
          <li className="mr-10" key={route.id}>
            <a href={route.path}>{route.label}</a>
          </li>
        ))}
      </ul> */}

      {/* 02... */}
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="./">Home</a>
        </li>
        <li className="mr-10">
          <a href="./about">About</a>
        </li>
        <li className="mr-10">
          <a href="./blog">Blog</a>
        </li>
      </ul> */}

      {/* 03... */}
      <ul className="md:flex hidden">{links}</ul>
      <button>Sign in</button>
    </nav>
  );
};

export default Navbar;
