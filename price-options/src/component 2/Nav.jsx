//
import { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routedata = [
    {
      id: 1,
      path: "/",
      element: "HomePage",
    },
    {
      id: 2,
      path: "/about",
      element: "AboutPage",
    },
    {
      id: 3,
      path: "/contact",
      element: "ContactPage",
    },
    {
      id: 4,
      path: "/products",
      element: "ProductsPage",
      children: [
        {
          id: 5,
          path: "details/:id",
          element: "ProductDetailsPage",
        },
      ],
    },
  ];

  return (
    <div>
      <nav>
        <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <AiOutlineAlignLeft />}
        </div>
        <ul
          className={`text-white md:flex gap-6 text-2xl absolute  md:static duration-2000 p-6 rounded-2xl 
             bg-amber-400 md:bg-transparent ${open ? "top-10" : "-top-46"} `}
        >
          {routedata.map((route, index) => {
            return (
              <div key={`${route.id}-${index} `}>
                <li className=" hover:bg-amber-600">
                  <a href={route.path}>{route.element}</a>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
