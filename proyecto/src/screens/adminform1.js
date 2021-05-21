import React, { useState, useEffect } from "react";
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
  SubDiv2,
} from "../elements/basePCadmin";
import firebase from "../firebase/conexion";

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [In, setIn] = useState({
    id: "",
    nocuenta: "1774280",
    nombre: "César",
  });

  const expresiones = {
    usuario: /^[0-9]{7}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };
  const [state, setState] = useState([]);
  useEffect(() => {
    firebase.db.collection("docentes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setState(docs);
      console.log(docs);
    });
  }, []);
  const saveProfesores = async (NoCuenta, name) => {
    await firebase.db
      .collection("docentes")
      .doc()
      .set({ nocuenta: NoCuenta, nombre: name });
    // console.log("guardado exitosamente la carrera");
  };
  const deleteProfesores = async (id) => {
    await firebase.db.collection("docentes").doc(id).delete();
  };
  const UpdateIn = async (value) => {
    setIn(value);
    console.log(value);
  };
  const actualizarProfesores = async (id, NoCuenta, name) => {
    await firebase.db
      .collection("docentes")
      .doc(id)
      .update({ nocuenta: NoCuenta, nombre: name });
    console.log("Actualiza");
  };
  const onSubmit = (e) => {
    if (usuario.valido === "true" && nombre.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarNombre({ campo: "", valido: null });
      // alert("La información se ha actualizado");
      saveProfesores(usuario.campo, nombre.campo);
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  const onPress = () => {
    if (usuario.valido === "true" && nombre.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarNombre({ campo: "", valido: null });
      // alert("La información se ha actualizado");
      actualizarProfesores(In.id, usuario.campo, nombre.campo);
    } else {
      cambiarFormularioValido(false);
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
              placeholder={In.nocuenta}
              name="usuario"
              leyendaError="El usuario tiene que ser de 7 dígitos y solo puede contener numeros"
              expresionR={expresiones.usuario}
            />
            <Input
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Ingrese Nombre completo del Docente"
              placeholder={In.nombre}
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
              onClick={() => {
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
          {state.map((value) => {
            return (
              <SubDiv2>
                <Items>{value.nocuenta}</Items>
                <Items>{value.nombre}</Items>
                <Lk className="Edit" to="Form" smooth={true} duration={1000}>
                  <Update onClick={() => UpdateIn(value)}>Editar</Update>
                </Lk>
                <Items>
                  <Clear onClick={() => deleteProfesores(value.id)}>
                    Borrar
                  </Clear>
                </Items>
              </SubDiv2>
            );
          })}
        </ProfesorTab>
      </Main>
    </Body>
  );
};

export default App;
