"use client";

import { programs_main } from "@/components/Pages/Admission/Programs/constants";
import { usePathname } from "next/navigation";
import React from "react";

function isValidDate(dateString: string) {
   // Regular expression to match the format YYYY/MM/DD
   const regex = /^\d{4}\/\d{2}\/\d{2}$/;

   // If the string doesn't match the format, it's not a valid date
   if (!regex.test(dateString)) {
      return false;
   }

   // Parse the date using the Date object
   const [year, month, day] = dateString.split("/").map(Number);
   const date = new Date(year, month - 1, day); // Months are zero-indexed

   // Check if the date is valid by comparing the input date with the parsed date
   return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

const ProgramsPage = () => {
   const params = usePathname().split("/")[4];

   console.log(programs_main);
   const filterResearch = programs_main[params];

   return <ProgramsMain data={filterResearch} />;
};

export default ProgramsPage;
