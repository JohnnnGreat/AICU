"use client";

import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import LinksShared from "../SharedAbout/LinksShared";

const ProChancellor = () => {
   return (
      <div>
         <title>PRO-Chancellor</title>
         {/* Hero Section */}
         <HeaderPage
            text="PRO-Chancellor"
            image="/about/mission-eight.jpg"
         />

         <LinksShared />

         {/* Content Section */}
         <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 bg-white">
            {/* Image of the President */}
            <div className="flex justify-center">
               <img
                  src="/about/mission-nine.jpg"
                  alt="President"
                  className="w-[80%] h-auto rounded-lg shadow-lg"
               />
            </div>

            {/* Text Content */}
            <div className="md:ml-8 mt-4 md:mt-0 max-w-2xl">
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Pastor James O. Fadel, M.S.O.R., M.B.A., D.Min., is the Pro-Chancellor of AICU in Floyd, TX. He is an Assistant General Overseer of The Redeemed Christian Church of God (RCCG) worldwide as well as the Continental Overseer and Chairman of the Board of Regional and Provincial Pastors
                  of RCCG The Americas1.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  He first trained as a mechanical engineer, and later obtained a master’s degree in Operations Research from Wayne State University, Detroit, MI in 1990. In addition, he earned an MBA from Lawrence Technological University, Southfield, MI in 1993. His most recent academic degree is
                  a Doctor of Ministry in Transformational Leadership from Bakke Graduate University, Seattle, WA.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Pastor Fadel is also an author with his own publishing company, Fadel Publishing Inc. A few of the titles he has written and published are: Right Leadership, Your 4 Fathers and Their Kingdoms, Be an Encourager (Text and Study Guide), Oasis of Elim: A 31-Day Devotional, 18 Destiny
                  Helpers You Need, and others.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  He was mentored by the General Overseer of RCCG Worldwide, Pastor E.A. Adeboye, who later commissioned Fadel for the work he is doing now. Under his leadership to date, RCCG The Americas has grown to 19 regions, 44 countries, and 1,190 parishes in 3 subcontinents – North, Central,
                  and South America. Each year, thousands attend the Annual Convention at the Redemption Campground of over 700 acres in Floyd, Texas.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Pastor Fadel also works tirelessly to develop other ministerial training programs to enable the ministers and workers of RCCG The Americas 1 to grow into maturity in their Christian walk and service. By the grace of God, he is happily married to Pastor Manita, a medical doctor
                  specialized in pediatric medicine, and they are blessed with three children
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem] font-bold">Pastor James O. Fadel, M.S.O.R., M.B.A., D.Min</p>
               <p className="text-gray-700 italic text-[.8rem] font-bold">Pro-Chancellor</p>
            </div>
         </section>

         {/* Back to Top Button */}
         <button
            className="fixed bottom-4 right-4 bg-[#0d0c37] text-white p-3 rounded-full shadow-lg hover:bg-[#af9e5a] transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
            ⬆️
         </button>
      </div>
   );
};

export default ProChancellor;
