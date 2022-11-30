import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Registration = lazy(() => import("./pages/Registration"));
const RoomDetails = lazy(() => import("./pages/RoomDetails"));
const Rooms = lazy(() => import("./pages/Rooms"));
const SignIn = lazy(() => import("./pages/SignIn"));

export function App() {
  return (
    <Suspense fallback="loading...">
      <Router>
        <Routes>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/" element={<Home />} />
          <Route path="/toxin" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/roomdetails/:id" element={<RoomDetails />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
