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
// import { Link } from "react-router-dom";
import { Title, Div, Log, H1, Cont } from "../elements/baselog";
import Input from "../components/input";

const App = (props) => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const onSubmit = (e) => {
    if (usuario.valido === "true" && password.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      props.NavLog();
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
          <H1>Ingresar como Administrador</H1>
        </Title>
        <Div></Div>
        <Cont>
          <Formulario accion="" onSubmit={onSubmit}>
            <Input
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Ingresa Nombre de Usuario"
              placeholder="Jhon123"
              name="usuario"
              leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.usuario}
            />
            <Input
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo="password"
              label="Contraseña"
              name="password1"
              leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
              expresionR={expresiones.password}
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
              <Send type="submit">Enviar</Send>
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
