"use client";
import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import LinksShared from "../SharedAbout/LinksShared";

const President = () => {
   return (
      <div>
         {/* Hero Section */}
         <HeaderPage
            text="PRESIDENT"
            image="/about/mission-eleven.jpg"
         />

         <LinksShared />

         {/* Content Section */}
         <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 bg-white">
            {/* Image of the President */}
            <div className="flex justify-center">
               <img
                  src="/about/mission-ten.jpg"
                  alt="President"
                  className="w-[80%] h-auto rounded-lg shadow-lg"
               />
            </div>

            {/* Text Content */}
            <div className="md:ml-8 mt-4 md:mt-0 max-w-2xl">
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Dr. Olushola Awobajo is a distinguished religious leader renowned for his extensive experience in
                  pastoral ministry and church planting. Currently serving as the President of Redeemers University
                  North America (formerly RCCGNA Seminary), Dr. Awobajo brings over three decades of invaluable
                  expertise to the institution.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  His journey in America began with establishing RCCG Isaac Generation Assembly in Houston, TX, in
                  October 2000, where he served as the founding Pastor. Under his visionary leadership, the church
                  experienced remarkable growth and influence, emerging as a beacon of spiritual inspiration. Dr.
                  Awobajo’s leadership led to the establishment of over 17 other churches throughout Texas, highlighting
                  his dedication to spreading the church’s mission and values.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Academically, Dr. Awobajo holds a Master of Divinity (M Div.) degree from the esteemed Houston
                  Graduate School of Theology, along with a Doctor of Ministry (D Min.) from Talbot School of Theology,
                  Biola University California, reflecting his commitment to scholarly pursuits and continuous spiritual
                  growth.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  From 2013 to 2017, Dr. Awobajo served as the Head of the Department of the School of Global Missions
                  and Intercultural Studies at RCCGNA Seminary, where he played a pivotal role in shaping the curriculum
                  and guiding students in their academic and spiritual endeavors. Recognized for his exemplary
                  leadership and academic excellence, he was appointed the First Chief Academic Officer of RCCGNA
                  Seminary from 2014 to 2018, leading initiatives to enhance educational standards and foster a
                  conducive learning environment.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  In his dedication to the advancement of theological education, Dr. Awobajo has served as a Member of
                  the Board of Trustees of RCCGNA Seminary since 2018. He contributes his wealth of experience and
                  wisdom to strategic decision-making processes, ensuring the institution’s continued growth and
                  success.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Outside of his professional endeavors, Dr. Awobajo is a devoted family man, married to Pastor Mrs.
                  Lola Awobajo. Together, they have been blessed with six children and six grandchildren, embracing the
                  importance of family values alongside their commitment to ministry.
               </p>

               <p className="text-gray-700 italic text-[.8rem] font-bold">Shola Awobajo | President</p>
            </div>
         </section>

         {/* Back to Top Button
         <button
            className="fixed bottom-4 right-4 bg-[#0d0c37] text-white p-3 rounded-full shadow-lg hover:bg-[#af9e5a] transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
            ⬆️
         </button> */}
      </div>
   );
};

export default President;
