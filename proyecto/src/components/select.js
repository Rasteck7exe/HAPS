import React from "react";
import { Select, Label } from "../elements/styleSelect";
const CompSelect = ({ list, label, name, estado, cambiarEstado }) => {
  // console.log(estado);
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} onChange={onChange}>
        {list.map((value) => {
          return (
            <option key={value.id} value={value.data}>
              {value.data}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default CompSelect;
