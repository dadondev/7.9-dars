import React from "react";
import styled from "styled-components";
import PlayBtn from "./components/PlayBtn";
import Button from "../../general/components/Button";
// component uchun kerakli componentlar olib kelindi

const StyledContainer = styled.div`
  min-height: 100%;
  padding-left: 25px;
  padding-right: 26px;
  padding-top: 220px;
  background: url(/images/background-mobile.svg) no-repeat center / cover;
`;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 300ms;
  align-items: center;
  padding-top: 138px;
  position: relative;
  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  height: 481px;
`;

const Img = styled.img`
  width: 250px;
  position: absolute;
  top: -50px;
  /* left: 50%;
  transform: translateX(-50%); */
`;

const Home = () => {
  return (
    <StyledContainer>
      <MenuStyled>
        <Img src="/images/logo.svg" alt="logo" />
        <PlayBtn />
        <Button variant={"circular"}>How to play</Button>
      </MenuStyled>
    </StyledContainer>
  );
};
// home component bir necha boshqa componentlar yordamida shakllantirildi

export default Home;
// component boshqa compentda ishlatish uchun expoert qilidi
