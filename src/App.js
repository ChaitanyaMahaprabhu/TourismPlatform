import logo from "./logo.svg";
import "./App.css";
import { Bold } from "./components/Home/Bold";
import { Footer } from "./components/Footer/Footer";
import { SharedData } from "./context/SharedData";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <SharedData>
        <Login/>
      </SharedData>
    </>
  );
}

export default App;
