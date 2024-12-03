import React from "react";
import HeroSection from "./Hero";
import Discover from "./Discover";
import Programs from "./Programs";
import OrdinationSection from "./Ordination";
import AdvisorSection from "./AdvisorSection";

const HomePage = () => {
   return (
      <>
         <title>American International Christian University | AICU</title>
         <meta
            name="description"
            content="Welcome to American International Christian University (AICU), a leading Christian institution dedicated to providing quality education and transformational leadership. Explore our unique programs, discover our mission, and join us as we grow together."
         />
         <HeroSection />
         <Discover />
         <Programs />
         <OrdinationSection />
         <AdvisorSection />
      </>
   );
};

export default HomePage;
