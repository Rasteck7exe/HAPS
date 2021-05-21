import React from "react";
import { Link } from "react-router-dom";

import {
  Body,
  Aside,
  MenuButtom,
  Main,
  Title,
  Div,
  Log,
  H1,
  ItemName,
  Items,
} from "../elements/basePCadmin";

const App = () => {
  return (
    <Body>
      <Aside>
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
          <H1>Este es el panel de control del Admin</H1>
        </Title>
        <Div></Div>
        <Log>
          <ItemName>Nombre</ItemName>
          <ItemName>Aula</ItemName>
          <ItemName>Grupo</ItemName>
          <ItemName>Fecha</ItemName>
          <ItemName>Hora de Entrada</ItemName>
          <ItemName>Hora de Salida</ItemName>
          <ItemName>Observaciones</ItemName>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>

          <Items>1</Items>
          <Items>2</Items>
          <Items>3</Items>
          <Items>4</Items>
          <Items>5</Items>
          <Items>6</Items>
          <Items>7</Items>
        </Log>
      </Main>
    </Body>
  );
};

export default App;
