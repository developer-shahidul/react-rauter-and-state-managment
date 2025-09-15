//

import { useState } from "react";
import Link from "../link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Blog", path: "/blog" },
  ];
  // {open?"":"hidden"}, { open ? "top-8" : "-top-32"}

  return (
    <nav className="text-black  bg-amber-300 px-6">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? <RxCross2></RxCross2> : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>}
      </div>
      <ul
        className={`md:flex md:static absolute duration-2000 bg-yellow-200 md:bg-transparent   ${
          open ? "top-8" : "-top-32"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
