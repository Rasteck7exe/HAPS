import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  pantone350c: "#2C5234",
  pantone112c: "#9C8412",
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Header = styled.header`
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  height: 150px;
  position: relative;
`;
const Nav = styled.nav`
  top: -20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 20px auto;
  max-width: 1000px;
  width: 90%;
`;
const List = styled.ul`
  list-style: none;
  display: table;
  /*Quitamos el overflow hidden que estaba aqui*/
  width: 100%;
  background: #000;
  box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  position: relative;
`;
const Li = styled.li`
  display: table-cell;
  color: #fff;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    background: ${colors.pantone350c};
    /* box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);  */
  }
`;
const Exit = styled.button`
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
export { Header, Nav, List, Li, Exit };
