import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";
import { SignIn } from "./pages/SignIn";
import { Test } from "./pages/Test";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}
