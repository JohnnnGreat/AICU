"use client";
import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import LinksShared from "../SharedAbout/LinksShared";

const OurChancellor = () => {
   return (
      <div>
         {/* Hero Section */}
         <HeaderPage
            text="Our Chancellor"
            image="/about/mission-seven.jpg"
         />

         <LinksShared />

         {/* Content Section */}
         <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 bg-white">
            {/* Image of the President */}
            <div className="flex justify-center">
               <img
                  src="/about/mission-six.jpg"
                  alt="President"
                  className="w-[80%] h-auto rounded-lg shadow-lg"
               />
            </div>

            {/* Text Content */}
            <div className="md:ml-8 mt-4 md:mt-0 max-w-2xl">
               <h2 className="text-[18px] font-bold mb-4">A Word from the President</h2>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Grace and peace to you from God our Father and the Lord Jesus Christ.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  I am excited to be part of the forward marching in the history of the AICU. We are grateful to God for
                  what He is doing in and through our faculty and students. At the AICU, our primary curriculum is the
                  Bible; our specific content is the Word of God. We are determined to hold on to these principles. At
                  our college, students not only receive solid Biblical teaching, they also experience the richness of
                  the presence of the Holy Spirit in their lives. Students from around world and from other ministries
                  and churches come to train at the college. Our staff and faculty ensure that every student receives
                  the kind of practical preparation needed for effective ministry.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  I am delighted that you have decided to pursue your education at the AICU. As you pray for God’s
                  direction in your purpose-driven life and ministry, you can be assured that the faculty members at the
                  AICU are dedicated to preparing you for work in our Lord’s Vineyard. Your membership of the college
                  family allows you to enjoy the peace and happiness of a worldwide community of servant-leaders who are
                  dedicated to reaching the lost of this turbulent world for the Kingdom of God.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  I welcome you as you join the onward march to populate our Lord’s Kingdom. May the Grace of the Lord
                  Jesus Christ be with your spirit.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">In His Majesty’s Service.</p>
               <p className="text-gray-700 italic text-[.8rem] font-bold">Pastor E. A. Adeboye | Chancellor</p>
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

export default OurChancellor;
