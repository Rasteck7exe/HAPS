import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  pantone350c: "#2C5234",
  pantone112c: "#9C8412",
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Log = styled.div`
  display: grid;
  grid-template-rows: 150px 20px 1fr;
`;
const Title = styled.div`
  width: 100%;
  background: ${colors.pantone350c};
  border-radius: 3px;
  color: #fff;
  padding: 10px;
`;
const H1 = styled.h1`
  text-align: center;
`;
const Div = styled.div`
  /* width: 100%; */
  background: ${colors.pantone112c};
  border-radius: 3px;
  height: 20px;
  /* line-height: 45px; */
  /* padding: 0 40px 0 10px; */
`;
const Cont = styled.div`
  background: #e2e2e2;
  border-radius: 3px;
  padding: 30px;
  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  /* height: 20px; */
`;

export { Log, Title, Div, H1, Cont };
