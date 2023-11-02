import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Popular from "./Popular";
import TopRated from "./TopRated";
import MovieDetails from "./Components/MovieDetails";
import Home from "./Components/Home";
import ActorDetails from "./Components/ActorDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/popular" element={<Popular />} />
        <Route path="/torated" element={<TopRated />} />
        <Route path="/movie/details/:movieId" element={<MovieDetails />} />
        <Route path="/person/:personId" element={<ActorDetails />} />
      </Routes>
    </div>
  );
}

export default App;
