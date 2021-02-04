import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const Confirm = ({ values, nextStep, goBackOneStep }) => {
  const styles = {
    button: {
      margin: "15px",
    },
  };

  //Process Form

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm details" />

        <List>
          <ListItem primaryText="First Name" secondaryText={values.firstName} />
          <ListItem primaryText="Last Name" secondaryText={values.lastName} />
          <ListItem primaryText="Email" secondaryText={values.email} />
          <ListItem primaryText="City" secondaryText={values.city} />
          <ListItem
            primaryText="Occupation"
            secondaryText={values.occupation}
          />
          <ListItem primaryText="Bio" secondaryText={values.bio} />
        </List>

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

export default Confirm;
