import React from "react";
import ReactDOM from "react-dom";
import Pet from './Pet';

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Nerinho",
                animal: "Gato",
                breed: "Frajolinha"
            }),
            React.createElement(Pet, {
                name: "Dodô",
                animal: "Cachorro",
                breed: "Maltês"
            }),
            React.createElement(Pet, {
                name: "Magah",
                animal: "Gato",
                breed: "Cinza"
            }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));