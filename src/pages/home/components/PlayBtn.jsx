import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 160px;
  transition: all 300ms;
  height: 160px;
  border-radius: 999px;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
  justify-content: center;
  margin-bottom: 57px;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
    box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
  }
`;

const PlayBtn = ({ children }) => {
  return (
    <StyledBtn>
      <img src="/images/icon-play.svg" alt="" />
    </StyledBtn>
  );
};

// children parametri destruck chining yordamida olinmoqda

export default PlayBtn;
// component boshqa componentda ishlatilishi uchun export qilindi
