"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const MissionAndVisionFirst = () => {
   const [activeSection, setActiveSection] = useState(null);

   const content = {
      "Mission & Vision": {
         information: [
            "mission: At AICU, our mission is to cultivate a Christ-centered community that develops leaders as ambassadors of Jesus Christ, promoting spiritual growth, moral integrity, and academic excellence to advance God's Kingdom in a diverse world.",

            "vision: Our vision is to be a globally recognized institution that shapes Christ-centered leaders who excel academically and advance God's Kingdom through transformative innovation in society.",
         ],
      },
      "Statement of Faith": {
         intro: "In alignment with the Lausanne Covenant, American International Christian University (AICU) seeks to be a community that glorifies God through academic excellence, spiritual formation, and faithful witness to the world. sAt AICU, we believe in:",
         information: [
            "The Authority of Scripture: We believe the Bible is God's inspired, infallible, and authoritative Word. The Bible is the supreme guide for our faith and conduct. We are dedicated to the diligent study and teaching of Scripture, aiming to equip our students to live out its truths in every aspect of their lives.",
            "The Trinity: We believe in one God, eternally existent in three distinct Persons: the Father, the Son, and the Holy Spirit. These three Persons are co-equal, co-eternal, and consubstantial, sharing the same divine essence, yet maintaining distinct personal attributes and roles within the Godhead.",
            "The Uniqueness and Universality of Christ: We affirm that Jesus Christ is the only Savior and that His life, death, and resurrection provide the sole means of salvation for all humanity. We uphold the necessity of proclaiming this gospel to all nations, calling everyone to faith and obedience in Christ.",
            "The Nature of Evangelism: We believe evangelism is the proclamation of the historical, biblical Christ as Savior and Lord, to persuade people to come to Him personally and be reconciled to God. We are committed to fostering a spirit of evangelism within our University community, encouraging students and staff to share their faith with clarity and compassion.",
            "Christian Social Responsibility: We acknowledge that God is the Creator and Judge of all people. Therefore, we are called to exhibit His justice and compassion by caring for the poor and underprivileged and by being stewards of His creation. We strive to integrate social responsibility into our curriculum, service opportunities, and campus life.",
            "The Uniqueness of AICU's Mission: We affirm that the center of God's cosmic purpose and is His appointed means of spreading the gospel to the nations and cultivating with local churches, encouraging our students to engage actively in church life and mission.",
            "The Importance of Unity: We believe that the unity of all believers, recognizing that our common faith in Christ transcends denominational and cultural differences. We promote a spirit of unity and cooperation.",
         ],
      },
      "Institutional Objectives": [],
   };

   const toggleSection = (section) => {
      setActiveSection((prevSection) => (prevSection === section ? null : section));
   };

   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.2rem] py-[5rem] px-[1rem] max-w-[1200px] mx-auto">
            <div>
               <img
                  src="/about/mission-two.jpg"
                  alt="Mission"
                  className="w-[100%] rounded-[20px]"
               />
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg">
               {Object.entries(content).map(([title, details]) => {
                  return (
                     <div
                        key={title}
                        className="border-b border-gray-200 last:border-b-0"
                     >
                        <div
                           className="flex justify-between items-center cursor-pointer py-4"
                           onClick={() => toggleSection(title)}
                        >
                           <h2 className="text-blue-900 font-bold">
                              <span className="font-bold">{title}:</span>{" "}
                              {title === "Statement of Faith" ? "" : details.mission}
                           </h2>
                           {activeSection === title ? (
                              <ChevronUp className="w-6 h-6 text-blue-900" />
                           ) : (
                              <ChevronDown className="w-6 h-6 text-blue-900" />
                           )}
                        </div>
                        {activeSection === title && (
                           <div className="pb-4">
                              {typeof details === "string" ? (
                                 <p className="text-gray-700">{details.vision}</p>
                              ) : (
                                 <div>
                                    <p className="text-[#000000b7] my-[1.2rem] text-[.9rem]">
                                       {details.intro ? details.intro : ""}
                                    </p>
                                    <ul
                                       className={`${
                                          title == "Mission & Vision" ? "list-none" : "list-decimal pl-6"
                                       }  text-gray-700 space-y-2`}
                                    >
                                       {details.information.map((item, index) => (
                                          <li key={index}>
                                             <span className="font-bold text-[.9rem] text-[#000000b7]">
                                                {item.split(":")[0]}:
                                             </span>{" "}
                                             {item.split(":")[1]}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
                           </div>
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="bg-[#00000021] h-[180px] my-[2rem] overflow-hidden max-w-[1200px] mx-auto py-[1.3rem] grid grid-cols-1 md:grid-cols-2 gap-[1rem] p-[1.3rem] items-center">
            <img
               src="/about/mission-three.jpg"
               alt="Mission Three "
               className="object-cover w-[100%!important] h-[180px] rounded-[20px]"
            />
            <p>
               The University is committed to cultivating an atmosphere where students excel spiritually and
               academically. Accordingly, the University has elected to undergo institutional accreditation with the
               Transnational Association of Christian Colleges and Schools. We are actively working to meet the
               necessary standards through a comprehensive assessment that will verify compliance.
            </p>
         </div>
      </>
   );
};

export default MissionAndVisionFirst;
