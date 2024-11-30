"use client";
import React from "react";
import Image from "next/image";
import PresidentImage from "../../../../../public/about/president.jpg";
import WelcomeImage from "../../../../../public/about/welcome-bg.jpg";
import HeaderPage from "@/components/Shared/HeaderPage";

const Welcome = () => {
   return (
      <div>
         {/* Hero Section */}
         <title>WELCOME</title>
         <HeaderPage
            text="WELCOME"
            image="/about/welcome-bg.jpg"
         />

         {/* Content Section */}
         <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 bg-white">
            {/* Image of the President */}
            <div className="flex justify-center">
               <Image
                  src={PresidentImage}
                  alt="President"
                  className="w-[80%] h-auto rounded-lg shadow-lg"
               />
            </div>

            {/* Text Content */}
            <div className="md:ml-8 mt-4 md:mt-0 max-w-2xl">
               <h2 className="text-[18px] font-bold mb-4">A Word from the President</h2>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  It is a privilege to serve as the first President of Redeemers University North
                  America, and I am delighted to extend a warm welcome to you. Whether you are a
                  prospective student, current student, alumni, faculty, or staff, I am honored to
                  have you here.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  At AICU, we are committed to preparing and equipping leaders to become ambassadors
                  of Christ worldwide who will impact their spheres of influence for the Kingdom of
                  God. As an institution committed to academic excellence, we offer extensive
                  academic programs, innovative teaching approaches, student-centered learning
                  models, groundbreaking research, and evidence-based community engagement. Our
                  faculty is dedicated to imparting leadership qualities upon our students based on
                  the Word of God and the power of the Holy Spirit so that they develop into leaders
                  who serve those around them with empathy and integrity.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Thank you for considering the Redeemers University North America as a place where
                  you can learn, grow, and thrive. I invite you to continue engaging with our AICU
                  community via our website and social media. I look forward to welcoming you to our
                  campus in person or virtually as we embark on this educational journey together.
               </p>
               <p className="text-gray-700 italic text-[.8rem]">Shola Awobajo, D.Min, MDiv</p>
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

export default Welcome;
