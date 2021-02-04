import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";
import UserForm from "../../components/Wizard/UserForm";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
const Home = () => {
  return (
    <>
      <UserForm />

      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
