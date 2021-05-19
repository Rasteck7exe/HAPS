import React from "react";
import ReactDOM from "react-dom";
// import App from "./screens/App";
import Log2 from "./screens/Rutas";
import "./css/estilos.css";
import "./firebase/conexion";
ReactDOM.render(
  <React.StrictMode>
    <Log2 />
  </React.StrictMode>,
  document.getElementById("root")
);
