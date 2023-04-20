import "./App.css";
import { Route, Routes } from "react-router-dom";
import axiosClient from "./axiosClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Order from "./components/Order";
import Authentication from "./components/Authentication";
import SignUp from "./components/SignUp";
import { useEffect } from "react";

function App() {
  // const getReviews = () => {
  //   axiosClient
  //     .get("/reviews")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   axiosClient
  //     .post("/auth/login", {
  //       email: "a",
  //       password: "321",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

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
