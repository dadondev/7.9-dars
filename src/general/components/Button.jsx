import React from "react";
import styled, { css } from "styled-components";
// component uchun kerakli funksiya va boshqa componentlar import qiingan

const StyledBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  transition: all 300ms;
  letter-spacing: 1.6px;
  font-size: 32px;
  transition: all 300ms;
  ${(props) => {
    switch (props.variant) {
      case "circular":
        return css`
          background-color: ${(props) => props.theme.colors.blue};
          padding: 12px 64px;
          border-radius: 48px;
          border-radius: 40px;
          box-shadow: 0px -2px 0px 3px #140e66 inset,
            0px 1px 0px 6px #3c74ff inset;
        `;
      case "rectangular":
        return css`
          background-color: ${(props) => props.theme.colors.blue};
          padding: 24px 0;
          width: 100%;
          text-align: center;
          box-shadow: 0px -2px 0px 3px #140e66 inset,
            0px 1px 0px 6px #3c74ff inset;
          border-radius: 20px;
        `;

      default:
        break;
    }
  }}
  /* bu yerda esa variant parametri qaysi turdagi btn ga togri kelishi aniqlanmoqda */
  &:hover,&:active {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      #2463ff;
  }

  ${(props) =>
    props.danger &&
    css`
      border-radius: 40px;
      background: var(
        --Pink-Gradient,
        linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%)
      );
      box-shadow: 0px -2px 0px 3px #140e66 inset, 0px 1px 0px 6px #c642fb inset;

      &:hover {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.25) 100%
          ),
          linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
      }
    `}/* bu yerda esa danger parametridagi qiymat aniqlanmoqda va unga mos stillar berilmoqda */
`;

const Button = ({ children, onClick, variant, danger }) => {
  return (
    <StyledBtn danger={danger} onClick={onClick} variant={variant}>
      {children}
    </StyledBtn>
  );
};

// bu yerda esa Button componenti yasalmoqda va unga bir-necha argumentlar berib yuborilmoqda

export default Button;
