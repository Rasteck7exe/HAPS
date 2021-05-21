import styled from "styled-components";
const colors = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Select = styled.select`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 3px solid ${colors.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
const Label = styled.form`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
`;

export { Select, Label };
