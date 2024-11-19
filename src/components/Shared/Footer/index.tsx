import Link from "next/link";
import React from "react";

// Footer data
const footerData = {
   about: [
      { title: "Our Mission", link: "/about/mission" },
      { title: "Our History", link: "/about/history" },
      { title: "AICU at a Glance", link: "/about/at-a-glance" },
      { title: "Board of Trustees", link: "/about/board-of-trustees" },
      { title: "Accreditation", link: "/about/accreditation" },
   ],
   admissions: [
      { title: "Requirements for Admission", link: "/admissions/how-to-apply" },
      { title: "How To Apply", link: "/admissions/requirements-for-admission" },
      { title: "International Students Guide", link: "#" },
      { title: "Tuition & Fees", link: "/admissions/tuition-fees" },
      { title: "Financial Aid", link: "/financial/aid" },
   ],
   academicResources: [
      { title: "Undergraduate Programs", link: "/academics/graduate-programs" },
      { title: "Graduate Programs", link: "#" },
      { title: "Master's Degrees", link: "#" },
      { title: "Doctoral Programs", link: "#" },
      { title: "Course Catalog", link: "#" },
   ],
   quickLinks: [
      { title: "Career Services", link: "#" },
      { title: "Transfer Credit", link: "#" },
      { title: "Transcript Request", link: "#" },
      { title: "Apply Now", link: "#", button: true },
   ],
   contact: {
      address: "4320 Highway 380 Business, Greenville TX 75401",
      phone: "+1 (214) 500-4893",
      email: "info@AICU.us",
      hours: "Monday - Friday 9AM - 5PM",
   },
   socialLinks: [
      { icon: "instagram", link: "#" },
      { icon: "facebook", link: "#" },
      { icon: "youtube", link: "#" },
      { icon: "linkedin", link: "#" },
   ],
};

const Footer = () => {
   return (
      <footer className="bg-[#1E2949] text-white  ">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="h-[30px] w-full fill-white"
         >
            <path
               className="elementor-shape-fill"
               d="M738,99l262-93V0H0v5.6L738,99z"
            ></path>
         </svg>
         <div className="container mx-auto px-6 py-[2rem]">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-8">
               {/* About Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">About AICU</h3>
                  <ul>
                     {footerData.about.map((item, index) => (
                        <li key={index}>
                           <Link
                              href={item.link}
                              className="text-gray-300 hover:text-white"
                           >
                              {item.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Admissions Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">Admissions</h3>
                  <ul>
                     {footerData.admissions.map((item, index) => (
                        <li key={index}>
                           <Link
                              href={item.link}
                              className="text-gray-300 hover:text-white"
                           >
                              {item.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Academic Resources Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">Academic Resources</h3>
                  <ul>
                     {footerData.academicResources.map((item, index) => (
                        <li key={index}>
                           <Link
                              href={item.link}
                              className="text-gray-300 hover:text-white"
                           >
                              {item.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Quick Links Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>
                  <ul>
                     {footerData.quickLinks.map((item, index) => (
                        <li
                           key={index}
                           className="mb-2"
                        >
                           {item.button ? (
                              <Link
                                 href={item.link}
                                 className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                              >
                                 {item.title}
                              </Link>
                           ) : (
                              <Link
                                 href={item.link}
                                 className="text-gray-300 hover:text-white"
                              >
                                 {item.title}
                              </Link>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Middle Section with Address and Contact Info */}
            <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-gray-400">
               <div>
                  <p className="mb-2 md:mb-0">
                     <strong>ADDRESS:</strong> {footerData.contact.address}
                  </p>
                  <p className="mb-2 md:mb-0">
                     <strong>PHONE:</strong> {footerData.contact.phone}
                  </p>
                  <p className="mb-2 md:mb-0">
                     <strong>EMAIL:</strong> {footerData.contact.email}
                  </p>
                  <p className="mb-2 md:mb-0">
                     <strong>HOURS:</strong> {footerData.contact.hours}
                  </p>
               </div>
            </div>

            {/* Bottom Section with Logo and Social Media Links */}
            <div className="border-t border-gray-700 py-4 flex flex-col items-center">
               {/* University Logo */}
               <img
                  src="/logo.png"
                  alt="University Logo"
                  className="w-24 h-auto mb-4"
               />

               <p className="text-sm text-gray-400 mb-4">
                  © 2024 AICU. All Rights Reserved | Web Design & Hosting by MSPSStream
               </p>

               {/* Social Media Links */}
               <div className="flex space-x-4">
                  {footerData.socialLinks.map((item, index) => (
                     <a
                        key={index}
                        href={item.link}
                        className="text-gray-400 hover:text-white"
                     >
                        <i
                           className={`fab fa-${item.icon} fa-lg`}
                           aria-hidden="true"
                        ></i>
                     </a>
                  ))}
               </div>

               {/* Privacy and Contact Links */}
               <div className="flex space-x-4 mt-4">
                  <a
                     href="#"
                     className="text-gray-400 hover:text-white"
                  >
                     Privacy/Terms
                  </a>
                  <a
                     href="#"
                     className="text-gray-400 hover:text-white"
                  >
                     Contact Us
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
