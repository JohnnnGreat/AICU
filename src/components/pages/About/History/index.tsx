import Link from "next/link";
import React from "react";

const History = () => {
   return (
      <div className=" py-[4rem] px-[1rem]">
         <div className="max-w-[1100px] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <div>
               <h1 className="text-pri text-[2rem] font-bold ">Our History</h1>
               <p className="text-[#00000094] mt-[1rem] leading-relaxed">
                  {" "}
                  Redeemers University North America (RUNA), formerly known as Redeemed Christian Church of God North
                  America Seminary, was founded by the Redeemed Christian Church of God in 2012.{" "}
                  <a
                     target="_black"
                     href="https://rccgna.org/"
                     className="text-pri"
                  >
                     The Redeemed Christian Church of God (RCCG)
                  </a>{" "}
                  is a worldwide organization of churches and key ministries. Founded in Nigeria in 1952, RCCG has
                  expanded into various regions, such as the Middle East, South America, Australia, and North America.
               </p>
               <p className="text-[#00000094] mt-[1rem] leading-relaxed">
                  <a
                     target="_black"
                     href="https://rccgna.org/"
                     className="text-pri"
                  >
                     The Redeemed Christian Church of God (RCCG)
                  </a>{" "}
                  (RCCGNA) began in Detroit in 1991 and now has over 800 churches across the United States and Canada.
                  RCCG is led by Pastor E.A. Adeboye, and its primary mission is twofold: to make heaven and take as
                  many people with us as possible. RCCG founded RCCGNA Seminary in August of 2012 to train true
                  ambassadors for Christ who would help further this mission. The Seminary provided a
                  biblically-centered education through classroom and online teaching with focused instruction on
                  Biblical studies, theology, pastoral leadership, and ministry. Its pedagogy centered around meeting
                  the needs of the local church. The University transitioned from RCCGNA Seminary to RUNA in 2023.
               </p>
               <p className="text-[#00000094] mt-[1rem] leading-relaxed">
                  At RUNA today, we strive to cultivate a community of lifelong learners who are deeply rooted in
                  Scripture, committed to excellence in ministry, and passionate about advancing the Kingdom of God.
                  With a firm foundation in God’s Word and a heart for service, our students are prepared to fulfill
                  their calling as ambassadors of Jesus Christ, bringing hope, healing, and transformation to
                  individuals and communities around the world.
               </p>

               <Link
                  className="border border-black py-[1rem] px-[3rem] text-pri rounded-full inline-block mt-[1rem]"
                  href="/about/mission"
               >
                  Mission Statement
               </Link>
            </div>

            <div className="w-full flex items-center justify-center my-[3rem]">
               {" "}
               <img
                  src="/about/mission-four.png"
                  alt="Mission FOur"
                  className="rounded-[20px] hover:grayscale"
               />
            </div>
         </div>
      </div>
   );
};

export default History;
