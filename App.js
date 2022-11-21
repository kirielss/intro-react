import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams.jsx";
import Details from "./details.js";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
