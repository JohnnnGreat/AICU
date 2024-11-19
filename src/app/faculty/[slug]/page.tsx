"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { faculty } from "@/components/Pages/Faculty/constants";

const FacultyPage = () => {
   const params = usePathname().split("/")[2];
   console.log(params);

   const filterResearch = faculty[params];

   return <div>FacultyPage</div>;
};

export default FacultyPage;
