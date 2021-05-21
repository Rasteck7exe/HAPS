import React, { useState } from "react";
import {
  Formulario,
  ContenedorCentrado,
  Send,
  Exito,
  Error,
} from "../elements/styleInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Title, Div, Log, H1, Cont } from "../elements/baselog";
import Input from "../components/input";
// import { Link } from "react-router-dom";

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[0-9_-]{7}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  // const validarpswd = () => {
  //   if (password.campo.length > 0) {
  //     if (password.campo !== password2.campo) {
  //       cambiarPassword2((prevState) => {
  //         return { ...prevState, valido: "false" };
  //       });
  //     } else {
  //       cambiarPassword2((prevState) => {
  //         return { ...prevState, valido: "true" };
  //       });
  //     }
  //   }
  // };

  // const onChangeTerminos = (e) => {
  //   cambiarTerminos(e.target.checked);
  // };

  const onSubmit = (e) => {
    if (usuario.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };

  return (
    <main>
      {/* <H1>Proyecto HAPS</H1> */}
      <Log>
        <Title>
          <H1>Registro Hora de Entrada </H1>
        </Title>
        <Div></Div>
        <Cont>
          <Formulario accion="" onSubmit={onSubmit}>
            <Input
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Ingresa Número de Cuenta"
              placeholder="1774280"
              name="usuario"
              leyendaError="El usuario tiene que ser de 7 dígitos y solo puede contener numeros."
              expresionR={expresiones.usuario}
            />
            {formularioValido === false && (
              <Error>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b> Por favor lleve el formulario correctamente
                </p>
              </Error>
            )}

            <ContenedorCentrado>
              <Send type="submit">Registro</Send>
              {formularioValido === "true" && (
                <Exito>Formulario se envio exitosamente</Exito>
              )}
            </ContenedorCentrado>
          </Formulario>
        </Cont>
      </Log>
    </main>
  );
};

export default App;
