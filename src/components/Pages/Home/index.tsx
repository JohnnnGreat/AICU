import Head from "next/head";
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
         {/* Open Graph Metadata */}
         <meta
            property="og:title"
            content="American International Christian University | AICU"
         />
         <meta
            property="og:description"
            content="Welcome to AICU, a leading Christian institution dedicated to quality education and transformational leadership."
         />
         <meta
            property="og:image"
            content="/logo-uni.jpg"
         />
         <meta
            property="og:url"
            content="https://aicuedu.org"
         />
         <meta
            property="og:type"
            content="website"
         />

         {/* Twitter Card Metadata */}
         <meta
            name="twitter:card"
            content="summary_large_image"
         />
         <meta
            name="twitter:title"
            content="American International Christian University | AICU"
         />
         <meta
            name="twitter:description"
            content="Welcome to AICU, a leading Christian institution dedicated to quality education and transformational leadership."
         />
         <meta
            name="twitter:image"
            content="/logo-uni.jpg"
         />

         {/* Favicon */}
         <link
            rel="icon"
            href="/logo-uni.jpg"
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
