import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext.js";
import SearchParams from "./SearchParams.jsx";
import Details from "./details.js";

const App = () => {
  const theme = useState("#f06d06");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
