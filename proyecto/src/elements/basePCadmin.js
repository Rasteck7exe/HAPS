import styled from "styled-components";

const colors = {
  pantone350c: "#2C5234",
  pantone112c: "#9C8412",
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};
const Body = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 300px 1400px 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;
const Aside = styled.aside`
  background: #000;
  box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  /* max-width: 300px; */
  width: 100%;
  margin: auto;
  padding: 40px;
  /* overflow: hidden; */
  max-height: 500px;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;
const MenuButtom = styled.div`
  padding: 20px;
  text-align: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    background: ${colors.pantone112c};
    /* box-shadow: 3px 0px 30px rgba(163, 163, 163, 1); */
  }
`;
const BackButtom = styled.div`
  padding: 20px;
  text-align: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    background: ${colors.exito};
    /* box-shadow: 3px 0px 30px rgba(163, 163, 163, 1); */
  }
`;
const Main = styled.main`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  padding: 40px;
  grid-row: span 2;
`;
const Log = styled.div`
  background: #fff;
  border-radius: 15px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;
const ProfesorTab = styled.div`
  background: #fff;
  border-radius: 15px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;
const ClaseTab = styled.div`
  background: #fff;
  border-radius: 15px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;
const CarreraTab = styled.div`
  background: #fff;
  border-radius: 15px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;

const ItemName = styled.div`
  background: #e2e2e2;
  color: #000;
  /* padding: 5px; */
  margin: 5px;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
`;
const Items = styled.div`
  background: #e2e2e2;
  color: #000;
  padding: 5px;
  margin: 5px;
  align-self: center;
  text-align: center;
  font-size: medium;
  /* font-weight: bold; */
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
const H2 = styled.h2`
  /* background: #e2e2e2; */
  text-align: center;
  /* margin: auto;
  padding: 10px;
  margin-top: 10px;
  max-width: 300px;
  width: 100%; */
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
const Clear = styled.button`
  height: 45px;
  line-height: 45px;
  width: 100%;
  background: ${colors.error};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  font-size: 20px;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;
const Update = styled.button`
  height: 45px;
  line-height: 45px;
  width: 100%;
  background: ${colors.exito};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  font-size: 20px;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const Lbl = styled.form`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
`;
export {
  Body,
  Aside,
  MenuButtom,
  BackButtom,
  Main,
  Log,
  ProfesorTab,
  ClaseTab,
  CarreraTab,
  ItemName,
  Items,
  Title,
  Div,
  H1,
  H2,
  Cont,
  Clear,
  Update,
  Lbl,
};
