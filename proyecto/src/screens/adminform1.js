import React, { useState } from "react";
import { Formulario, Send, Exito, Error, SaveUp } from "../elements/pc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Input from "../components/input";
import { Link as Lk } from "react-scroll";
import {
  Body,
  Aside,
  Main,
  Title,
  Div,
  ItemName,
  Items,
  H1,
  Cont,
  ProfesorTab,
  Clear,
  Update,
  MenuButtom,
  BackButtom,
} from "../elements/basePCadmin";

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[0-9]{7}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const onSubmit = (e) => {
    if (usuario.valido === "true" && nombre.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarNombre({ campo: "", valido: null });
      alert("La información se ha actualizado");
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  const onPress = (e) => {
    if (usuario.valido === "true" && nombre.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarNombre({ campo: "", valido: null });
      alert("La información se ha actualizado");
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  return (
    <Body>
      <Aside>
        <BackButtom>
          <Link
            to="/protected"
            style={{
              fontSize: "large",
              fontWeight: "bold",
              listStyle: 0,
              color: "#fff",
              textDecoration: 0,
              justifySelf: "stretch",
              alignSelf: "stretch",
              // hover: true,
            }}
          >
            Panel de Control
          </Link>
        </BackButtom>
        <MenuButtom>
          <Link
            to="/protected/form2"
            style={{
              fontSize: "large",
              fontWeight: "bold",
              listStyle: 0,
              color: "#fff",
              textDecoration: 0,
              justifySelf: "stretch",
              alignSelf: "stretch",
              // hover: true,
            }}
          >
            Clases
          </Link>
        </MenuButtom>
        <MenuButtom>
          <Link
            to="/protected/form3"
            style={{
              fontSize: "large",
              fontWeight: "bold",
              listStyle: 0,
              color: "#fff",
              textDecoration: 0,
              justifySelf: "stretch",
              alignSelf: "stretch",
              // hover: true,
            }}
          >
            Carreras
          </Link>
        </MenuButtom>
      </Aside>
      <Main>
        <Title>
          <H1>Administracion de profesores</H1>
        </Title>
        <Div></Div>
        <Cont>
          <Formulario className="Form" accion="" onSubmit={onSubmit}>
            <Input
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Ingresa el Número de Cuenta"
              placeholder="1774280"
              name="usuario"
              leyendaError="El usuario tiene que ser de 7 dígitos y solo puede contener numeros"
              expresionR={expresiones.usuario}
            />
            <Input
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Ingrese Nombre completo del Docente"
              placeholder="John Doe"
              name="nombre"
              leyendaError="El nombre solo puede contener letras y espacios."
              expresionR={expresiones.nombre}
            />
            {formularioValido === false && (
              <Error>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b> Por favor lleve el formulario correctamente
                </p>
              </Error>
            )}

            <Send type="submit">Registar</Send>
            <SaveUp
              onKeyPress={() => {
                onPress();
              }}
            >
              Actualizar
            </SaveUp>
            {formularioValido === "true" && (
              <Exito>Formulario se envio exitosamente</Exito>
            )}
          </Formulario>
        </Cont>

        <ProfesorTab>
          {/* Cabecera */}
          <ItemName>Número de Cuenta</ItemName>
          <ItemName>Nombre completo</ItemName>
          <ItemName></ItemName>
          <ItemName></ItemName>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
        </ProfesorTab>
      </Main>
    </Body>
  );
};

export default App;
