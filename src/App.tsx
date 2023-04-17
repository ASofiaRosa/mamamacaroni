import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Order from "./components/Order";
import Authentication from "./components/Authentication";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/logIn" element={<Authentication />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
