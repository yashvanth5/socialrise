// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Components/Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
