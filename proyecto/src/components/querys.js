import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase/conexion.js";
const [links, setCarreras] = useState([]);

const carrerasFunction = () => {
  const initialState = {
    id: "",
    nombre: "",
  };
  const [state, setState] = useState(initialState);
  const [Loading, setLoading] = useState(true);
  const getCarreras = async () => {
    await db.collection("carreras").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setState(docs);
    });
    setLoading(false);
  };
  useEffect(() => {
    getCarreras();
  }, []);
};

const deleteCarrera = async (nombreCarrera) => {
  await db
    .collection("carreras")
    .where("nombre", "==", nombreCarrera)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs[0].ref.delete();
    });
};

const addCarrera = async (linkObject) => {
  await db.collection("carrera").doc().set(linkObject);
  console.log("guardado exitosamente la carrera");
};
//Clases
const addClases = async (linkObject, idCarrera) => {
  await db
    .collection("carrera")
    .doc(id)
    .collection("clases")
    .doc()
    .set(linkObject);
  console.log("guardado exitosamente la clase");
};
const clasesFunction = () => {
  const initialState = {
    id: "",
    profesor: "",
    nombre: "",
    grupo: "",
    aula: "",
    dia: "",
    horaEntrada: "",
    horaSalida: "",
  };
  const [state, setState] = useState(initialState);
  const [Loading, setLoading] = useState(true);
  const getClases = async (idCarrera, idprofesor) => {
    await db
      .collection("carreras")
      .doc(idCarrera)
      .collection("clases")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id, profesor: idprofesor });
        });
        setState(docs);
      });
    setLoading(false);
  };
  useEffect(() => {
    getClases(idCarrera, idprofesor);
  }, []);
};

const deleteClase = async (idCarrera, idClase) => {
  try {
    await db
      .collection("carreras")
      .doc(idCarrera)
      .collection("clases")
      .doc(idClase)
      .delete();
  } catch (error) {
    console.log("error");
  }
};

//Profesores
const addProfesor = async (object) => {
  await db
    .collection("profesores")
    .doc()
    .collection("clases")
    .doc()
    .set(object);
  console.log("guardado exitosamente el profesor");
};

const profesoresFunction = () => {
  const initialState = {
    id: "",
    nombre: "",
  };
  const [state, setState] = useState(initialState);
  const [Loading, setLoading] = useState(true);
  const getProfesores = async (nocuenta) => {
    await db.collection("profesores").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id, nocuenta: nocuenta });
      });
      setState(docs);
    });
    setLoading(false);
  };
  useEffect(() => {
    getProfesores();
  }, []);
};

const deleteProfesor = async (idprofesor) => {
  try {
    await db.collection("profesores").doc(idprofesor).delete();
  } catch (error) {
    console.log("error");
  }
};

//Asistencia

const getProfesores = async (objectSalida, objectEntrada) => {
  await db
    .collection("asistencia")
    .where("idprofesor", "==", nocuenta)
    .where("horaentrada", "==", true)
    .where("horasalida", "==", false)
    .onSnapshot((querySnapshot) => {
      if (querySnapshot.exists()) {
        querySnapshot.update(objectSalida);
      } else {
        db.collection("profesores")
          .where("idprofesor", "==", nocuenta)
          .onSnapshot((querySnapshot) => {
            if (querySnapshot.exists()) {
              db.collection("asistencia").doc().set(objectEntrada);
            }
          });
      }
    });
};
let isEqual = (a, b) => a === b;
