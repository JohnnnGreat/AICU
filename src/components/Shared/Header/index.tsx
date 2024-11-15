import React from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { aboutDropdownContent, admissionsContent, otherNavItems } from "./constant";
import Navbar from "./Top";

const Header = () => {
   return (
      <>
         <Navbar />
         <header className="w-full bg-white shadow-sm h-[120px]">
            <div className="max-w-[1100px] mx-auto px-4 h-full">
               <div className="flex items-center justify-between h-full">
                  <Link
                     href="/"
                     className="flex items-center"
                  >
                     <img
                        src="/logo.png"
                        alt="Redeemers University Logo"
                        className="h-[70px] w-auto"
                     />
                  </Link>

                  {/* Navigation Section */}
                  <nav className="flex items-center gap-[2rem]">
                     {/* About RUNA Dropdown */}
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-[15px] text-[#003399] hover:text-blue-700">
                           <h1 className="leading-none">ABOUT RUNA</h1>{" "}
                           {/* <ChevronDown className="ml-1 h-4 w-4 leading-none" /> */}
                           <Plus className="h-2 w-2 ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[600px] p-[3rem]">
                           <div className="grid grid-cols-3 gap-8">
                              {Object.entries(aboutDropdownContent).map(([section, items]) => (
                                 <div
                                    key={section}
                                    className="space-y-3"
                                 >
                                    <h3 className="font-semibold text-blue-900 text-sm">{section}</h3>
                                    <div className="flex flex-col space-y-2">
                                       {items.map((item) =>
                                          item.isButton ? (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition-colors"
                                             >
                                                {item.label}
                                             </Link>
                                          ) : (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                             >
                                                {item.label}
                                             </Link>
                                          ),
                                       )}
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-[15px] text-[#003399] hover:text-blue-700">
                           ADMISSIONS <Plus className="h-2 w-2 ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[800px] p-6">
                           <div className="grid grid-cols-3 gap-8">
                              {Object.entries(admissionsContent).map(([section, items]) => (
                                 <div
                                    key={section}
                                    className="space-y-4"
                                 >
                                    <h3 className="font-semibold text-blue-900 text-sm border-b border-blue-900 pb-2">
                                       {section}
                                    </h3>
                                    <div className="flex flex-col space-y-3">
                                       {items.map((item, index) =>
                                          item.img ? (
                                             <div
                                                key={`img-${index}`}
                                                className="mt-4"
                                             >
                                                <img
                                                   src={item.img}
                                                   alt={item.alt}
                                                   className="rounded-lg w-full h-auto object-cover"
                                                />
                                             </div>
                                          ) : (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                             >
                                                {item.label}
                                             </Link>
                                          ),
                                       )}
                                    </div>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-6">
                              <Link
                                 href="/apply-now"
                                 className="block w-full bg-blue-700 text-white text-center py-3 rounded hover:bg-blue-800 transition-colors"
                              >
                                 Apply Now
                              </Link>
                           </div>
                        </DropdownMenuContent>
                     </DropdownMenu>

                     {/* Other Navigation Items */}
                     {otherNavItems.map((item) => (
                        <DropdownMenu key={item.label}>
                           <DropdownMenuTrigger className="flex items-center text-sm text-blue-900 hover:text-blue-700">
                              {item.label} <Plus className="h-2 w-2 ml-1" />
                           </DropdownMenuTrigger>
                           <DropdownMenuContent className="p-[3rem]">
                              <div className="flex flex-col space-y-1">
                                 {item.items.map((subItem) => (
                                    <Link
                                       key={subItem.label}
                                       href={subItem.href}
                                       className="text-gray-700 hover:text-blue-700 text-sm px-2 py-1 transition-colors"
                                    >
                                       {subItem.label}
                                    </Link>
                                 ))}
                              </div>
                           </DropdownMenuContent>
                        </DropdownMenu>
                     ))}

                     <Link
                        target="_blank"
                        href="https://rccgnaseminary.populiweb.com/router/library/links/index"
                        className="flex uppercase items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        Library
                     </Link>
                     <Link
                        href="library"
                        className="flex items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        ALUMNI
                     </Link>
                  </nav>

                  {/* Apply Button */}
                  <Link
                     href="/apply"
                     className="bg-[#F7C750] shadow-md hover:bg-[#a78635] text-blue-900 px-6 py-2 rounded transition-colors"
                  >
                     Apply Online →
                  </Link>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
