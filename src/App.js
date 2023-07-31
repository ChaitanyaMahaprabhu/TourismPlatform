import logo from "./logo.svg";
import "./App.css";
import { Bold } from "./components/Home/Bold";
import { Footer } from "./components/Footer/Footer";
import { Faq } from "./components/Home/Faq";
import { SharedData } from "./context/SharedData";

function App() {
  return (
    <>
      <SharedData>
        <Faq />
      </SharedData>
    </>
  );
}

export default App;
