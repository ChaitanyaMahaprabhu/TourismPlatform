import logo from "./logo.svg";
import "./App.css";
import { Bold } from "./components/Home/Bold";
import { Footer } from "./components/Footer/Footer";
import { SharedData } from "./context/SharedData";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { AgentRegistration } from "./components/Register/AgentRegistration";
import { TravellerRegistration } from "./components/Register/TravellerRegistration";
import { Choice } from "./components/Register/Choice";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { Feedback } from "./components/Feedback/Feedback";

function App() {
  return (
    <>
      <SharedData>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Choice" element={<Choice />} />
          <Route
            path="/TravellerRegistration"
            element={<TravellerRegistration />}
          />
          <Route path="/AgentRegistration" element={<AgentRegistration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* test */}
          <Route path="/test" element={<Feedback />} />
        </Routes>
      </SharedData>
    </>
  );
}

export default App;
