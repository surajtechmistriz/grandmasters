import React from "react";
import { useNavigate } from "react-router-dom";
import { useOfficialMessages } from "../hooks/useOfficialMessages";

const OfficialMessagesSidebar = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useOfficialMessages(6);

  const apiData = data?.data || {};

  const messageYears = Object.keys(apiData)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({
      year,
      messages: apiData[year].map((item: any) => ({
        id: item.id,
        slug: item.speaker?.slug,
        name: item.speaker?.name,
        role: item.speaker?.designation,
        org: item.speaker?.company,
      })),
    }));

  if (isLoading) {
    return (
      <div className="flex min-h-screen -mt-40 -ml-20 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D0252D]/20 border-t-[#D0252D]" />
      </div>
    );
  }

  return (
    <aside className="font-roboto">
      {messageYears.map((yearData, i) => (
        <div key={yearData.year}>
          <h2 className="text-lg sm:text-xl font-normal text-[#333] mb-3   leading-tight">
            {yearData.year} Official Messages
          </h2>

          <div className="space-y-6">
            {yearData.messages.map((item: any) => (
              <div key={item.id}>
                <h3 className="font-bold text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#333]">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#333]">
                  {item.role}
                </p>
                {item.org && (
                  <p className="text-xs sm:text-[12px] leading-5 sm:leading-6 text-[#333]">
                    {item.org}
                  </p>
                )}

                <button
                  onClick={() => navigate(`/official-message/${item.slug}`)}
                  className="mt-1 text-sm text-[#d61f26] hover:underline cursor-pointer"
                >
                  Read More...
                </button>
              </div>
            ))}
          </div>

          {i !== messageYears.length - 1 && (
            <div className="border-b border-gray-300 my-6 sm:my-8" />
          )}
        </div>
      ))}
    </aside>
  );
};

// {/* <aside className="font-roboto">
//       {messageYears.map((yearData, yearIndex) => (
//         <div key={yearData.year}>
//           {/* Year Heading */}
//           <h2 className="text-lg sm:text-xl font-normal text-[#333] mb-5 leading-tight">
//             {yearData.year} Official Messages
//           </h2>

//           {/* Messages */}
//           <div className="space-y-6">
//             {yearData.messages.map((item, index) => (
//               <div key={index}>
//                 <h3 className="font-bold text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#333]">
//                   {item.name}
//                 </h3>

//                 <p className="text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#333]">
//                   {item.role}
//                 </p>

//                 {item.org && (
//                   <p className="text-xs sm:text-[12px] leading-5 sm:leading-6 text-[#333]">
//                     {item.org}
//                   </p>
//                 )}

//                 <button
//                   onClick={() => navigate(`/official-message/${item.id}`)}
//                   className="mt-1 text-sm text-[#d61f26] hover:underline cursor-pointer"
//                 >
//                   Read More...
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Divider */}
//           {yearIndex !== messageYears.length - 1 && (
//             <div className="border-b border-gray-300 my-6 sm:my-8" />
//           )}
//         </div>
//       ))}
//     </aside> */}
export default OfficialMessagesSidebar;
