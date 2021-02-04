import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = ({
  values,
  handleChange,
  nextStep,
  goBackOneStep,
}) => {
  const {
    handleChangeOccupation,
    handleChangeCity,
    handleChangeBio,
  } = handleChange;

  const styles = {
    button: {
      margin: "15px",
    },
  };

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="enter Personal details" />
        <TextField
          hintText="Enter your occupation"
          floatingLabelText="occupation"
          onChange={handleChangeOccupation}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter your City"
          floatingLabelText="City"
          onChange={handleChangeCity}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter your bio"
          floatingLabelText="bio"
          onChange={handleChangeBio}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={nextStep}
        />
        <RaisedButton
          label="Go Back"
          primary={false}
          style={styles.button}
          onClick={goBackOneStep}
        />
      </>
    </MuiThemeProvider>
  );
};

export default FormPersonalDetails;
