import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";

const heroContent = {
   title: "Federal Financial Aid is now Available.",
   subtitle: "Congratulations and good news to all our students.",
   description: "You can now apply for financial aid to study at RUNA.",
   availability: "This opportunity is available for both enrolled and prospective students.",
   contact: {
      name: "Dr. Danielle Okoro",
      email: "finaid@rccgnaseminary.org",
   },
};

const informationSections = [
   {
      title: "Financial Support Information",
      content: [
         "Below are the estimated expenses for F-1 based on a full 12-month term (fall, spring, and summer semesters). Please note this is an estimate of expenses for one full year of study and students may pay an amount other than what is listed below based on the number of hours enrolled, housing options, and academic major.",
         "Students are required to provide proof of funding for one year of study at RUNA prior to admission, before an I- 20/DS-2019 can be issued, and at the visa interview with the U.S. Department of State.",
      ],
   },
   {
      title: "Bank account (Checking, Saving, CD's)",
      bulletPoints: [
         "Should be dated within six (6) months from first day of trimester admitted.",
         "Should be official and clearly identify account holder's name, type of account, bank name and branch.",
         "Should contain the specific amount of money available (statements with non-liquid assets: proper, credit card, bonds, stocks, retirement account are not acceptable).",
         "Originals may be requested at RUNA's discretion.",
      ],
   },
   {
      title: "University Funds",
      bulletPoints: [
         "The main types of funding that a student may receive will be assistantships, fellowships (graduate students) or scholarships. Please contact the admissions officer (214) 500-4893 for more information.",
         "The university will issue written offer letters to confirm awards to students. If you have been offered an award by RUNA, then you may use that award toward the funding requirement for your I-20. If your award does not cover the required amount, you will be required to show additional funding from another source to cover the balance.",
      ],
   },
   {
      title: "Government Funds",
      bulletPoints: [
         "The I-20 cannot be issued until a financial guarantee with the student's name, university name, and academic major student is admitted has been provided.",
         "Sponsors living in the U.S. will be REQUIRED to also submit the I-134 Affidavit of Support and any supporting documents required with this form.",
      ],
   },
];

const InfoCard = ({ title, content, bulletPoints }) => (
   <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#4A5DB4] mb-4">{title}</h3>
      {content &&
         content.map((paragraph, idx) => (
            <p
               key={idx}
               className="text-gray-600 mb-4"
            >
               {paragraph}
            </p>
         ))}
      {bulletPoints && (
         <ul className="space-y-3 text-gray-600">
            {bulletPoints.map((point, idx) => (
               <li key={idx}>• {point}</li>
            ))}
         </ul>
      )}
   </div>
);

const HeroSection = ({ content }) => (
   <div className="max-w-7xl mx-auto mb-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
         <div>
            <h1 className="text-4xl font-bold text-[#4A5DB4] mb-4">{content.title}</h1>
            <p className="text-xl text-gray-700 mb-4">{content.subtitle}</p>
            <p className="text-gray-600 mb-4">{content.description}</p>
            <p className="text-gray-600 mb-4">{content.availability}</p>
            <p className="text-gray-600 mb-6">
               Contact {content.contact.name} via{" "}
               <a
                  href={`mailto:${content.contact.email}`}
                  className="text-[#4A5DB4] hover:text-[#4A5DB4]/80"
               >
                  {content.contact.email}
               </a>{" "}
               for more information.
            </p>
         </div>
         <div className="mt-8 lg:mt-0">
            <img
               src="/new/n-3.jpg"
               alt="Graduating students celebrating"
               className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
         </div>
      </div>
   </div>
);

const FinancialInformation = () => {
   return (
      <>
         <HeaderPage
            text="Financial Information"
            image="/admission/ad-22.jpg"
         />
         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <HeroSection content={heroContent} />

            <div className="max-w-7xl mx-auto">
               <h2 className="text-3xl font-bold text-[#4A5DB4] text-center mb-8">
                  International Students
               </h2>
               <p className="text-gray-600 text-center mb-12">
                  Please consider the information below information carefully. You can also contact
                  the admissions officer on (214) 500-4893 for more information.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                  {informationSections.map((section, idx) => (
                     <InfoCard
                        key={idx}
                        title={section.title}
                        content={section.content}
                        bulletPoints={section.bulletPoints}
                     />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default FinancialInformation;
