//

import Link from "./Link";

const Navbar = () => {
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

  return (
    <nav>
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
      <ul className="flex">
        {navigaitionData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
