import React from "react";
import styled from "styled-components";

const bgcolors = {
  error: "red",
};
const MyStyledBtn = styled.button`
  background-color: ${(bgVolor) => (bgVolor ? bgVolor : bgcolors.error)};
  color: ${(variant) => (variant ? variant : "white")};
`;
const Button = ({ props }) => {
  return <MyStyledBtn props={{ ...props }}>Button</MyStyledBtn>;
};

export default Button;
