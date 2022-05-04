import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './Project/Signup';
import Login from './Project/Login';
import Profile from './Project/Profile';
import HomePage from "./HomePage";

function App(props) {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App;


