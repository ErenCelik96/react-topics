import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Buttons = () => {
  return (
    <ButtonGroup>
      <Button color="secondary" variant="contained" size="large" startIcon={<SaveIcon/>}>SAVE</Button>
      <Button color="primary" variant="contained" size="large" endIcon={<DeleteIcon/>}>DELETE</Button>
    </ButtonGroup>
  );
};

export default Buttons;
