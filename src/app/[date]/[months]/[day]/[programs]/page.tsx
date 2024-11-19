"use client";

import { programs_main } from "@/components/Pages/Admission/Programs/constants";
import ProgramsPage from "@/components/Pages/Admission/Programs/ProgramsPage";
import { usePathname } from "next/navigation";
import React from "react";

const ProgramsPageMain = () => {
   const params = usePathname().split("/")[4];

   console.log(programs_main);
   const filterResearch = programs_main[params];

   return <ProgramsPage data={filterResearch} />;
};

export default ProgramsPageMain;
