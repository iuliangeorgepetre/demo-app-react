import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";
import { homeObjOne } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
    </>
  );
};

export default Home;
