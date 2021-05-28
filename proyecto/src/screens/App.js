import React, { useState, useEffect } from "react";
import {
  Formulario,
  ContenedorCentrado,
  Send,
  Exito,
  Error,
} from "../elements/styleInput";
import { SaveUp } from "../elements/pc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Title, Div, Log, H1, Cont } from "../elements/baselog";
import Input from "../components/input";
// import { Link } from "react-router-dom";
import firebase from "../firebase/conexion";
const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [profesores, setProfesores] = useState(null);
  const [clases, setClases] = useState(null);
  const [asistencia, setAsistencia] = useState(null);
  const [start, setStart] = useState(new Date());
  const [finish, setFinish] = useState(new Date());

  const expresiones = {
    usuario: /^[0-9_-]{7}$/, // Letras, numeros, guion y guion_bajo
  };
  useEffect(() => {
    firebase.db.collection("docentes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
    });
    // console.log(docs);
  }, []);
  const BusquedaClass = async (docentes) => {
    var name = null;
    await firebase.db
      .collection("clases")
      .where("docentes", "==", docentes)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          name = { ...doc.data() };
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    // console.log(name);
    setClases(name);
    // isAsssit(name);
  };

  const BusquedaDoc = async (nocuenta) => {
    var name = null;
    await firebase.db
      .collection("docentes")
      .where("nocuenta", "==", nocuenta)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          name = { ...doc.data(), id: doc.id };
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setProfesores(name);
    console.log(name);
    // getidAssist(name.nombre);
    BusquedaClass(name.nombre);
  };
  const saveEntrada = async (nam, aul, grup, day, ent) => {
    await firebase.db
      .collection("asistencia")
      .doc()
      .set({
        nombre: nam,
        aula: aul,
        grupo: grup,
        dia: day,
        entrada: ent.getHours() + ":" + ent.getMinutes(),
        salida: "",
      });
    console.log("guardado exitosamente la carrera");
  };
  // const saveSalida = async (nam, aul, grup, day, sld) => {
  //   await firebase.db
  //     .collection("asistencia")
  //     .doc()
  //     .set({
  //       nombre: nam,
  //       aula: aul,
  //       grupo: grup,
  //       dia: day,
  //       salida: sld.getHours() + ":" + sld.getMinutes(),
  //     });
  //   // console.log("guardado exitosamente la carrera");
  // };
  const getidAssist = async (name) => {
    var asist = "";
    await firebase.db
      .collection("asistencia")
      .where("nombre", "==", name)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          asist = { id: doc.id };
          console.log("Asist", asist);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setAsistencia(asist);
  };
  const saveSalida = async (id, sld) => {
    await firebase.db
      .collection("asistencia")
      .doc(id)
      .update({ salida: sld.getHours() + ":" + sld.getMinutes() });
    alert("actualizado");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario.valido === "true") {
      cambiarFormularioValido(true);
      // BusquedaDoc(usuario.campo);
      // setStart(new Date());
      // // console.log(profesores.nombre);
      // saveEntrada(
      //   profesores.nombre,
      //   clases.aula,
      //   clases.grupo,
      //   clases.dia,
      //   start
      // );
      cambiarUsuario({ campo: "", valido: "" });
    } else {
      cambiarFormularioValido(false);
    }
  };
  const onChange = () => {
    if (usuario.valido === "true") {
      cambiarFormularioValido(true);
      // BusquedaDoc(usuario.campo);
      // setFinish(new Date());
      // saveSalida(profesores.nombre, finish);
      cambiarUsuario({ campo: "", valido: "" });
    } else {
      cambiarFormularioValido(false);

      // BusquedaDoc(usuario.campo);
      // // getidAssist();
      // console.log(profesores);
      // console.log(clases);
      // setFinish(new Date());
      // saveSalida(profesores.nombre, finish);
      cambiarUsuario({ campo: "", valido: "" });
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
              <Send type="submit">Registro Entrada</Send>
              <SaveUp onClick={onChange}>Registro Salida</SaveUp>
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
