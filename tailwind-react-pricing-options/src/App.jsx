import { Suspense } from "react";
import "./App.css";
import DaisiNav from "./components/daisiNav/daisiNav";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";

function App() {
  const pricingPromise = fetch("pricingData.json").then((res) => res.json());

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
