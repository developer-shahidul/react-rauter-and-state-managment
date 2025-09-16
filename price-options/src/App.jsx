//
import "./App.css";
import DaisiNav from "./components/DaisiNav/DaisiNav";
import LineChart from "./components/lineChart/LineChart";
import Navbar from "./components/navbar/Navbar";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisiNav></DaisiNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
