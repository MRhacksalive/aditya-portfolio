import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.addEventListener("mousemove", (e) => {

const x = (e.clientX / window.innerWidth - 0.5) * 40;
const y = (e.clientY / window.innerHeight - 0.5) * 40;

document.body.style.setProperty("--x", `${x}px`);
document.body.style.setProperty("--y", `${y}px`);

});
document.addEventListener("mousemove", (e) => {

const x = (e.clientX / window.innerWidth) * 100;
const y = (e.clientY / window.innerHeight) * 100;

document.body.style.setProperty("--mouse-x", `${x}%`);
document.body.style.setProperty("--mouse-y", `${y}%`);

});
