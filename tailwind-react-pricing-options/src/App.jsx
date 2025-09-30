import { Suspense } from "react";
import "./App.css";
import DaisiNav from "./components/daisiNav/daisiNav";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";
import ResultChart from "./components/resultscharts/ResultChart";
import axios from "axios";
import MarksChart from "./components/markChart/MarksChart";

function App() {
  const pricingPromise = fetch("pricingData.json").then((res) => res.json());
  const marksPromise = axios.get("marksData.json");
  // console.log(marksPromise);

  return (
    <>
      <header>
        {/* <DaisiNav></DaisiNav> */}
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
