import { NavLink } from "react-router";

//
const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", fontSize: "30px" }}>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contract">Contract</NavLink>
        <NavLink to="/block">Block</NavLink>
      </div>
    </nav>
  );
};

export default Header;
