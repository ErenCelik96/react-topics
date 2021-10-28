import React from "react";
import { Button } from "./button/Button.styles";
import ExtendedComp from "./extended-link/ExtendedComp";
import HeaderText from "./header/HeaderText";
import Link from "./link/Link";
import Wrapper from "./wrapper/Wrapper";
const StyledComponents = () => {
  return (
    <Wrapper>
      <HeaderText>Clarusway</HeaderText>
      <HeaderText headerColor="red">Clarusway</HeaderText>
      <Link secondary href="https://clarusway.com/" target="_blank" rel="noopener">
      {" "}
        Learn Fs Development
      {" "}
      </Link>
      <ExtendedComp>extended from link comp</ExtendedComp>
      <Button>Default</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
