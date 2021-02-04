import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  //go to next step

  const nextStep = () => {
    setStep(step + 1);
  };

  const goBackOneStep = () => {
    setStep(step - 1);
  };

  //Handle fields change

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeOccupation = (event) => {
    setOccupation(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };

  const handleChange = {
    handleChangeBio,
    handleChangeCity,
    handleChangeOccupation,
    handleChangeEmail,
    handleChangeLastName,
    handleChangeFirstName,
  };

  const values = { city, bio, occupation, firstName, lastName, email, step };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          goBackOneStep={goBackOneStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          goBackOneStep={goBackOneStep}
          values={values}
        />
      );
    case 4:
      return <h1>Success</h1>;
    default:
      return <h1>An error occurred</h1>;
  }
};

export default UserForm;
