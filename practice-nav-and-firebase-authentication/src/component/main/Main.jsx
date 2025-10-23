import { Outlet } from "react-router";
import Header from "../header/Header";
<Header></Header>;

const Main = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
