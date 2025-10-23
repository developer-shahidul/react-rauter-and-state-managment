import { NavLink } from "react-router";

//
const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", fontSize: "30px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contract">Contract</NavLink>
      <NavLink to="/block">Block</NavLink>
    </nav>
  );
};

export default Header;
