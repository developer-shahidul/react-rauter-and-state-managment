//
import "./App.css";
import AreaChartFillByValue from "./component 2/AreaChartFillByValue";
import Nav from "./component 2/Nav";
import SynchronizedLineChart from "./component 2/SynchronizedLineChart";
import DaisiNav from "./components/DaisiNav/DaisiNav";
import LineChart from "./components/lineChart/LineChart";
import Navbar from "./components/navbar/Navbar";
import Phone from "./components/phones/Phone";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisiNav></DaisiNav> */}
      {/* <Navbar></Navbar> */}
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      {/* <LineChart></LineChart> */}
      <SynchronizedLineChart></SynchronizedLineChart>
      <Phone></Phone>
      <AreaChartFillByValue></AreaChartFillByValue>
    </>
  );
}

export default App;
