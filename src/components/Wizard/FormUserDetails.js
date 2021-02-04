import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueToNextStep = (e) => {
    nextStep();
  };

  const {
    handleChangeFirstName,
    handleChangeLastName,
    handleChangeEmail,
  } = handleChange;

  const styles = {
    button: {
      margin: "15px",
    },
  };

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="enter user details" />
        <TextField
          hintText="Enter your first name"
          floatingLabelText="First Name"
          onChange={handleChangeFirstName}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          hintText="Enter your last name"
          floatingLabelText="Last Name"
          onChange={handleChangeLastName}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={handleChangeEmail}
          defaultValue={values.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueToNextStep}
        />
      </>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
