import logo from "./logo.svg";
import "./App.css";
import { Bold } from "./components/Home/Bold";
import { Footer } from "./components/Footer/Footer";
import { SharedData } from "./context/SharedData";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <SharedData>
        <Home/>
      </SharedData>
    </>
  );
}

export default App;
