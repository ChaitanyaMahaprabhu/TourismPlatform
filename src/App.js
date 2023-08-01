import logo from "./logo.svg";
import "./App.css";
import { Bold } from "./components/Home/Bold";
import { Footer } from "./components/Footer/Footer";
import { SharedData } from "./context/SharedData";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import {AgentRegistration} from "./components/Register/AgentRegistration";
import {TravellerRegistration} from "./components/Register/TravellerRegistration";
import { Choice } from "./components/Register/Choice";

function App() {
  return (
    <>
      <SharedData>
        <Choice/>
      </SharedData>
    </>
  );
}

export default App;
