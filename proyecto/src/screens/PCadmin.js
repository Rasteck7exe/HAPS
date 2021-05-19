import React, { useState } from "react";

import {
  Main,
  Title,
  Div,
  Log,
  H1,
  H2,
  HR,
  ItemName,
} from "../elements/basePCadmin";

const App = () => {
  return (
    <Main>
      <Title>
        <H1>Este es el panel de control del Admin</H1>
      </Title>
      <Div></Div>
      <Log>
        <ItemName>
          <H2>Nombre</H2>
        </ItemName>
        <ItemName>
          <H2>Aula</H2>
        </ItemName>
        <ItemName>
          <H2>Grupo</H2>
        </ItemName>
        <ItemName>
          <H2>Fecha</H2>
        </ItemName>
        <ItemName>
          <H2>Hora de Entrada</H2>
        </ItemName>
        <ItemName>
          <H2>Hora de Salida</H2>
        </ItemName>
        <ItemName>
          <H2>Observaciones</H2>
        </ItemName>
        <HR>
          <hr />
        </HR>
        <ItemName>
          <H2>1</H2>
        </ItemName>
        <ItemName>
          <H2>2</H2>
        </ItemName>
        <ItemName>
          <H2>3</H2>
        </ItemName>
        <ItemName>
          <H2>4</H2>
        </ItemName>
        <ItemName>
          <H2>5</H2>
        </ItemName>
        <ItemName>
          <H2>6</H2>
        </ItemName>
        <ItemName>
          <H2>7</H2>
        </ItemName>
        <HR>
          <hr />
        </HR>
      </Log>
    </Main>
  );
};

export default App;
