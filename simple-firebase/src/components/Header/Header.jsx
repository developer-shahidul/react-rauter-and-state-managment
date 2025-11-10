//
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink style={{ marginRight: "20px" }} to="/">
        Home
      </NavLink>
      <NavLink to="/login" style={{ marginRight: "20px" }}>
        Login
      </NavLink>
      <NavLink to="/community">Community</NavLink>
    </div>
  );
};

export default Header;
