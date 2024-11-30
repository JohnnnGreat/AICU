import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import CoreValues from "../SharedAbout/CoreValues";

const AtGlanceComponent = () => {
   const programs = [
      { number: 2, title: "Ordination Tracks" },
      { number: 3, title: "Undergraduate Degree" },
      { number: 5, title: "Graduation Certificates" },
      { number: 4, title: "Graduate Degrees" },
      { number: 2, title: "Doctoral Degrees" },
   ];
   return (
      <>
         <HeaderPage
            text="AICU at a Glance"
            image="/about/al-5.jpg"
         />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] max-w-[1100px] p-[2rem] mx-auto items-center">
            <div>
               <h1 className="text-[3rem] font-bold text-[#4A5DB4]">The AICU Community</h1>
               <p>
                  At American University, you will see individuals from diverse backgrounds united
                  by their faith and shared dedication to positively impacting the world. Our
                  community fosters a sense of closeness and mutual care while providing students
                  with a vast network of peers worldwide. It is our hope that your university
                  experience will be filled with joy, friendship, and transformative educational
                  moments. Throughout your journey at AICU, our faculty and staff will be here to
                  support you.
               </p>
            </div>
            <div>
               <img
                  src="/about/al-6.jpg"
                  alt="AIC AT Glance"
                  className="rounded-[20px]"
               />
            </div>
         </div>

         <div className="bg-[#336] py-[5rem] px-[1rem]">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
               <img
                  src="/about/al-7.jpg"
                  alt=""
                  className="rounded-[20px]"
               />

               <div className="bg-[#202041] p-[4rem] rounded-[20px]">
                  <h1 className="text-[3rem] font-bold text-white">The AICU Story</h1>
                  <p className="text-white ">
                     American University (AICU), formerly known as Redeemed Christian Church of God
                     North America Seminary, was founded by the Redeemed Christian Church of God in
                     2012. The Redeemed Christian Church of God (RCCG) is a worldwide organization
                     of churches and key ministries. Founded in Nigeria in 1952, RCCG has expanded
                     into various regions, such as the Middle East, South America, Australia, and
                     North America.
                  </p>

                  <Link
                     className="bg-yellow-500 inline-block mt-[1rem] font-bold rounded-full py-[.9rem] px-[2.4rem] uppercase text-white"
                     href="/about/history"
                  >
                     AICU's History
                  </Link>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] max-w-[1100px] p-[2rem] mx-auto items-center">
            <img
               src="/about/al-8.jpg"
               alt=""
               className="rounded-full border-[25px] border-[#4A5DB4]"
            />
            <div>
               <h1 className="text-[3rem] font-bold text-[#4A5DB4]">Our President</h1>
               <p>
                  Pastor Shola Awobajo is passionate about identifying and empowering youth and
                  young adults and fostering their development as effective leaders within faith
                  communities and in society at large.
               </p>
               <Link
                  className="]  border-[2px] border-[#4A5DB4] shadow-md inline-block mt-[1rem] font-bold rounded-full py-[.9rem] px-[2.4rem] uppercase"
                  href="/about/history"
               >
                  A MESSAGE FROM THE PRESIDENT
               </Link>
            </div>
         </div>

         <section className="text-center py-10 bg-white">
            <h2 className="text-[20px] font-bold text-[#4A5DB4] mb-6">Programs Offered</h2>
            <div className="flex justify-center items-center space-x-6">
               {programs.map((program, index) => (
                  <div
                     key={index}
                     className="text-center"
                  >
                     <h3 className="text-4xl font-semibold text-[#4A5DB4]">{program.number}</h3>
                     <p className="text-sm text-gray-600">{program.title}</p>
                  </div>
               ))}
            </div>
         </section>

         <CoreValues />
      </>
   );
};

export default AtGlanceComponent;
