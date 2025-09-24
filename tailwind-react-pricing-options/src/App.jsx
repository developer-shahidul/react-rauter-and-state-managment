import "./App.css";
import DaisiNav from "./components/daisiNav/daisiNav";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <header>
        {/* <DaisiNav></DaisiNav> */}
        <Navbar></Navbar>
      </header>
      <main></main>
      <h1 className="text-3xl text-green-700">Vite + React</h1>
      <footer></footer>
    </>
  );
}

export default App;
