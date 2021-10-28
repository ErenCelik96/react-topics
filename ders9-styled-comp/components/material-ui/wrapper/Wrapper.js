import React from "react";
import Container from "@material-ui/core/Container/Container"

const Wrapper = ({children}) => {
  return (
    <Container maxWidth="xs">
      {children}  
    </Container>
  );
};

export default Wrapper;
