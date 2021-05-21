import React, { useState } from "react";
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
const App = () => {
  const [profesores, setProfesores] = useState({ campo: "" });
  const [start, setStart] = useState(new Date());
  const [finish, setFinish] = useState(new Date());
  const [materia, cambiarMateria] = useState({ campo: "", valido: null });
  const [aula, cambiarAula] = useState({ campo: "", valido: null });
  const [grupo, cambiarGrupo] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    materia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    aula: /^[a-zA-Z0-9_-]{2,10}$/, // Letras, numeros, guion y guion_bajo
    grupo: /^[a-zA-Z0-9_-]{2,10}$/, // Letras, numeros, guion y guion_bajo
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
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  const onPress = (e) => {
    if (
      materia.valido === "true" &&
      aula.valido === "true" &&
      grupo.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarMateria({ campo: "", valido: "" });
      cambiarAula({ campo: "", valido: null });
      cambiarGrupo({ campo: "", valido: null });
      e.preventDefault();
    } else {
      cambiarFormularioValido(false);
      e.preventDefault();
    }
  };
  const pb = [
    { id: "1", data: "one" },
    { id: "2", data: "two" },
    { id: "3", data: "oneasdddddddddddd" },
    { id: "4", data: "twoasddddd" },
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
              placeholder="Procesamiento de Imagenes"
              name="materia"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.materia}
            />
            <Input
              estado={aula}
              cambiarEstado={cambiarAula}
              tipo="text"
              label="Ingresa la Aula correspondiente"
              placeholder="F12"
              name="aula"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.aula}
            />
            <Input
              estado={grupo}
              cambiarEstado={cambiarGrupo}
              tipo="text"
              label="Ingresa el Grupo correspondiente"
              placeholder="S7"
              name="grupo"
              leyendaError="Solo puede contener numeros, letras y guion bajo."
              expresionR={expresiones.aula}
            />
            <Select
              list={pb}
              label="Selecciona un Docente"
              name="Profesores"
              estado={profesores}
              cambiarEstado={setProfesores}
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
                onKeyPress={() => {
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
          <ItemName>Hora Inicio</ItemName>
          <ItemName>Hora Salida</ItemName>
          <ItemName></ItemName>
          <ItemName></ItemName>
          {/* Items */}
          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Lk className="Edit" to="Form" smooth={true} duration={1000}>
            <Update>Editar</Update>
          </Lk>
          <Items>
            <Clear>Borrar</Clear>
          </Items>
        </ClaseTab>
      </Main>
    </Body>
  );
};

export default App;
