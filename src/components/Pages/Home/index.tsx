import React from "react";
import HeroSection from "./Hero";
import Discover from "./Discover";
import Programs from "./Programs";
import OrdinationSection from "./Ordination";

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <Discover />
         <Programs />
         <OrdinationSection />
      </>
   );
};

export default HomePage;
