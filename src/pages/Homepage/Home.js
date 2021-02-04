import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import ModalButton from "../../components/Modal/ModalButton";
import Pricing from "../../components/Pricing/Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <ModalButton />

      <InfoSection {...homeObjTwo} />

      <InfoSection {...homeObjThree} />

      <Pricing />

      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
