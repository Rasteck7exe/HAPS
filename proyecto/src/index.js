import React from "react";
import ReactDOM from "react-dom";
// import App from "./screens/App";
import Rutas from "./screens/Rutas";
import "./css/estilos.css";
import "./firebase/conexion";
ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById("root")
);
