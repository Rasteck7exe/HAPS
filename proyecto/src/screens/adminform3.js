import React, { useState, useEffect } from "react";
import { Formulario, Send, Exito, Error, SaveUp } from "../elements/pc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Input from "../components/input";
import firebase from "../firebase/conexion";
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
  Clear,
  Update,
  BackButtom,
  MenuButtom,
  CarreraTab,
  SubDiv,
} from "../elements/basePCadmin";
import { Link as Lk } from "react-scroll";

const App = () => {
  const [In, setIn] = useState({ id: "", nombre: "Ingenieria en Software" });

  const [carrera, cambiarCarrera] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    carrera: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  };

  const [state, setState] = useState([]);
  useEffect(() => {
    firebase.db.collection("carrera").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setState(docs);
      console.log(docs);
    });
  }, []);
  const saveCarrera = async (linkObject) => {
    await firebase.db.collection("carrera").doc().set({ nombre: linkObject });
    console.log("guardado exitosamente la carrera");
  };

  const deleteCarrera = async (id) => {
    await firebase.db.collection("carrera").doc(id).delete();
  };
  const actualizarCarrera = async (id, dato) => {
    await firebase.db.collection("carrera").doc(id).update({ nombre: dato });
    console.log("Actualiza");
  };
  const onSubmit = (e) => {
    if (carrera.valido === "true") {
      cambiarFormularioValido(true);
      cambiarCarrera({ campo: "", valido: "" });
      saveCarrera(carrera.campo);
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  const onPress = () => {
    if (carrera.valido === "true") {
      cambiarFormularioValido(true);
      cambiarCarrera({ campo: "", valido: "" });
      actualizarCarrera(In.id, carrera.campo);
    } else {
      cambiarFormularioValido(false);
    }
  };
  const UpdateIn = async (value) => {
    setIn(value);
    console.log(value);
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
            to="/protected/form1"
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
            Profesores
          </Link>
        </MenuButtom>
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
      </Aside>
      <Main>
        <Title>
          <H1>Administracion de Carreras</H1>
        </Title>
        <Div></Div>
        <Cont>
          <Formulario className="Form" accion="" onSubmit={onSubmit}>
            <Input
              estado={carrera}
              cambiarEstado={cambiarCarrera}
              tipo="text"
              label="Ingresa Nombre de la Carrera"
              placeholder={In.nombre}
              name="usuario"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.carrera}
            />
            {console.log(In.nombre)}
            <div />
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
        <CarreraTab>
          {/* Cabecera */}
          <ItemName>Nombre completo de la Carrera</ItemName>
          <ItemName></ItemName>
          <ItemName></ItemName>
          {/* Items */}
          {state.map((value) => {
            return (
              <SubDiv>
                <Items>{value.nombre}</Items>
                <Lk className="Edit" to="Form" smooth={true} duration={1000}>
                  <Update onClick={() => UpdateIn(value)}>Editar</Update>
                </Lk>
                <Items>
                  <Clear onClick={() => deleteCarrera(value.id)}>Borrar</Clear>
                </Items>
              </SubDiv>
            );
          })}
        </CarreraTab>
      </Main>
    </Body>
  );
};

export default App;
