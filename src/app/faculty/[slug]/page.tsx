"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { faculty } from "@/components/Pages/Faculty/constants";
import FacultyComponent from "@/components/Pages/Faculty";

const FacultyPage = () => {
   const params = usePathname().split("/")[2];

   const filterResearch = faculty[params];

   return (
      <FacultyComponent
         fType={params}
         data={filterResearch}
      />
   );
};

export default FacultyPage;
