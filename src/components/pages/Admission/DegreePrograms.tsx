import ApplicationForm from "./components/ApplicationForm";

const DegreePrograms = () => {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Graduate Image */}
            <div className="flex-1">
               <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full aspect-w-16 aspect-h-12 bg-gradient-to-r from-emerald-500 to-teal-600 p-1 rounded-lg">
                     <div className="bg-white h-full w-full rounded-lg p-2">
                        <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
                           {/* Placeholder for actual image */}
                           <div className="text-center p-4">
                              <img
                                 src="/admissions/ad-19.jpg"
                                 alt=""
                              />
                              <svg
                                 className="w-20 h-20 mx-auto text-gray-400"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                 />
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0L3 9m9 5v7m9-12v7"
                                 />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 space-y-6">
               <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Undergraduate & Graduate Degrees</h1>

               <p className="text-gray-600 leading-relaxed">
                  By applying to the undergraduate or graduate Degree program at RUNA you have made the bold decision to
                  dedicate your time to learning both academically and spiritually. You are applying to an institution
                  that is committed to guiding you towards your future and onwards in God's service.
               </p>

               <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
                  Apply Below
               </button>
            </div>
         </div>

         <ApplicationForm />
      </div>
   );
};

export default DegreePrograms;
