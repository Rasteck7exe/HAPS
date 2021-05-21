import React, { useState, useEffect } from "react";
//Elemetos para estilos
import {
  Formulario,
  ContenedorCentrado,
  Send,
  Exito,
  Error,
  SaveUp,
} from "../elements/pc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
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
  ClaseTab,
  Lbl,
  SubDiv3,
} from "../elements/basePCadmin";
//Componentes para seleccionar Fecha con Hora
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//eventos de scroll
import { Link as Lk } from "react-scroll";
//Componentes
import Input from "../components/input";
import Select from "../components/select";
//Rutas
import { Link } from "react-router-dom";

import firebase from "../firebase/conexion";

const App = () => {
  const [carrera, setCarrera] = useState({ campo: "" });
  const [dia, setDia] = useState({ campo: "" });
  const [profesores, setProfesores] = useState({ campo: "" });
  const [start, setStart] = useState(new Date());
  const [finish, setFinish] = useState(new Date());
  const [materia, cambiarMateria] = useState({ campo: "", valido: null });
  const [aula, cambiarAula] = useState({ campo: "", valido: null });
  const [grupo, cambiarGrupo] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const [In, setIn] = useState({
    id: "",
    materia: "Procesamiento de Imagenes",
    aula: "F12",
    grupo: "S7",
  });
  const [statecarrera, setStatecarrera] = useState([]);
  const [stateprofesores, setStateprofesores] = useState([]);
  const [clases, setClases] = useState([]);

  useEffect(() => {
    firebase.db.collection("carrera").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setStatecarrera(docs);
    });
    firebase.db.collection("docentes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setStateprofesores(docs);
    });
    firebase.db.collection("clases").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setClases(docs);
    });
  }, []);
  const expresiones = {
    materia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    aula: /^[a-zA-Z0-9_-]{2,10}$/, // Letras, numeros, guion y guion_bajo
    grupo: /^[a-zA-Z0-9_-]{2,10}$/, // Letras, numeros, guion y guion_bajo
  };
  const saveClases = async (mat, aul, grup, doce, day, car, ent, sld) => {
    await firebase.db
      .collection("clases")
      .doc()
      .set({
        materia: mat,
        aula: aul,
        grupo: grup,
        docentes: doce,
        dia: day,
        carrera: car,
        entrada: ent.getHours() + ":" + ent.getMinutes(),
        salida: sld.getHours() + ":" + sld.getMinutes(),
      });
    // console.log("guardado exitosamente la carrera");
  };
  const deleteClases = async (id) => {
    await firebase.db.collection("clases").doc(id).delete();
  };
  const UpdateIn = async (value) => {
    setIn(value);
    console.log(value);
  };
  const actualizarClases = async (
    id,
    mat,
    aul,
    grup,
    doce,
    day,
    car,
    ent,
    sld
  ) => {
    await firebase.db
      .collection("clases")
      .doc(id)
      .update({
        materia: mat,
        aula: aul,
        grupo: grup,
        docentes: doce,
        dia: day,
        carrera: car,
        entrada: ent.getHours() + ":" + ent.getMinutes(),
        salida: sld.getHours() + ":" + sld.getMinutes(),
      });
    console.log("Actualiza");
  };
  const onSubmit = (e) => {
    if (
      materia.valido === "true" &&
      aula.valido === "true" &&
      grupo.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarMateria({ campo: "", valido: "" });
      cambiarAula({ campo: "", valido: null });
      cambiarGrupo({ campo: "", valido: null });
      saveClases(
        materia.campo,
        aula.campo,
        grupo.campo,
        profesores.campo,
        dia.campo,
        carrera.campo,
        start,
        finish
      );
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  const onPress = () => {
    console.log(materia.valido);
    console.log(aula.valido);
    console.log(grupo.valido);
    if (
      materia.valido === "true" &&
      aula.valido === "true" &&
      grupo.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarMateria({ campo: "", valido: "" });
      cambiarAula({ campo: "", valido: null });
      cambiarGrupo({ campo: "", valido: null });
      actualizarClases(
        In.id,
        materia.campo,
        aula.campo,
        grupo.campo,
        profesores.campo,
        dia.campo,
        carrera.campo,
        start,
        finish
      );
    } else {
      cambiarFormularioValido(false);
    }
  };
  const semana = [
    { id: "1", nombre: "Lunes" },
    { id: "2", nombre: "Martes" },
    { id: "3", nombre: "Miercoles" },
    { id: "4", nombre: "Jueves" },
    { id: "5", nombre: "Viernes" },
    { id: "6", nombre: "Sabado" },
    { id: "7", nombre: "Domingo" },
  ];
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
          <H1>Administracion de Clases</H1>
        </Title>
        <Div></Div>
        <Cont>
          <Formulario className="Form" accion="" onSubmit={onSubmit}>
            <Input
              estado={materia}
              cambiarEstado={cambiarMateria}
              tipo="text"
              label="Ingresa Nombre de la Materia"
              placeholder={In.materia}
              name="materia"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.materia}
            />
            <Input
              estado={aula}
              cambiarEstado={cambiarAula}
              tipo="text"
              label="Ingresa la Aula correspondiente"
              placeholder={In.aula}
              name="aula"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.aula}
            />
            <Input
              estado={grupo}
              cambiarEstado={cambiarGrupo}
              tipo="text"
              label="Ingresa el Grupo correspondiente"
              placeholder={In.grupo}
              name="grupo"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.grupo}
            />
            {/* {console.log(statecarrera)} */}
            <Select
              list={stateprofesores}
              label="Selecciona un Docente"
              name="Profesores"
              estado={profesores}
              cambiarEstado={setProfesores}
            />
            <Select
              list={semana}
              label="Selecciona El dia de la semana"
              name="dia"
              estado={dia}
              cambiarEstado={setDia}
            />
            <Select
              list={statecarrera}
              label="Selecciona la carrera correspondiente"
              name="Carreras"
              estado={carrera}
              cambiarEstado={setCarrera}
            />
            <div>
              <Lbl>Selecciona Hora de Inicio</Lbl>
              <DatePicker
                name="Entrada"
                selected={start}
                onChange={(date) => setStart(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
            <div>
              <Lbl>Selecciona Hora de Salida</Lbl>
              <DatePicker
                name="Salida"
                selected={finish}
                onChange={(date) => setFinish(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>

            {formularioValido === false && (
              <Error>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b> Por favor lleve el formulario correctamente
                </p>
              </Error>
            )}

            <ContenedorCentrado>
              <Send type="submit">Registrar</Send>
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
            </ContenedorCentrado>
          </Formulario>
        </Cont>
        <ClaseTab>
          {/* Cabecera */}
          <ItemName>Materia</ItemName>
          <ItemName>Aula</ItemName>
          <ItemName>Grupo</ItemName>
          <ItemName>Profesor</ItemName>
          <ItemName>Carrera</ItemName>
          <ItemName>Dia</ItemName>
          <ItemName>Hora Inicio</ItemName>
          <ItemName>Hora Salida</ItemName>
          <ItemName></ItemName>
          <ItemName></ItemName>
          {/* {console.log(statecarrera)} */}
          {/* Items */}
          {clases.map((value) => {
            return (
              <SubDiv3>
                <Items>{value.materia}</Items>
                <Items>{value.aula}</Items>
                <Items>{value.grupo}</Items>
                <Items>{value.docentes}</Items>
                <Items>{value.carrera}</Items>
                <Items>{value.dia}</Items>
                <Items>{value.entrada.toString()} hrs.</Items>
                <Items>{value.salida.toString()} hrs.</Items>
                <Lk className="Edit" to="Form" smooth={true} duration={1000}>
                  <Update onClick={() => UpdateIn(value)}>Editar</Update>
                </Lk>
                <Items>
                  <Clear onClick={() => deleteClases(value.id)}>Borrar</Clear>
                </Items>
              </SubDiv3>
            );
          })}
        </ClaseTab>
      </Main>
    </Body>
  );
};

export default App;
