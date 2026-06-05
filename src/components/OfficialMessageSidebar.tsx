import React from "react";
import { useNavigate } from "react-router-dom";

const messageYears = [
  {
    year: "2025",
    messages: [
      {
        id: "honble-justice-manmohan",
        name: "Hon'ble Justice Manmohan",
        role: "Judge",
        org: "Supreme Court of India",
      },
      {
        id: "lalit-bhasin",
        name: "Dr. Lalit Bhasin",
        role: "President",
        org: "Society of Indian Law Firms",
      },
      {
        id: "bansuri-swaraj",
        name: "Bansuri Swaraj",
        role: "Senior Advocate",
        org: "Supreme Court of India",
      },
      {
        id: "veta-richardson",
        name: "Ms. Veta T. Richardson",
        role: "President & CEO, ACC",
        org: "",
      },
    ],
  },

  {
    year: "2024",
    messages: [
      {
        id: "honble-justice-manmohan",
        name: "Hon'ble Justice Manmohan",
        role: "Judge",
        org: "Supreme Court of India",
      },
      {
        id: "lalit-bhasin",
        name: "Dr. Lalit Bhasin",
        role: "President",
        org: "Society of Indian Law Firms",
      },
      {
        id: "bansuri-swaraj",
        name: "Bansuri Swaraj",
        role: "Senior Advocate",
        org: "Supreme Court of India",
      },
      {
        id: "veta-richardson",
        name: "Ms. Veta T. Richardson",
        role: "President & CEO, ACC",
        org: "",
      },
    ],
  },

  {
    year: "2023",
    messages: [
      {
        id: "honble-justice-manmohan",
        name: "Hon'ble Justice Manmohan",
        role: "Judge",
        org: "Supreme Court of India",
      },
      {
        id: "no-data",
        name: "Dr. P.S.N Prasad",
        role: "Member (J)",
        org: "NCLT Bench – New Delhi",
      },
      {
        id: "lalit-bhasin",
        name: "Dr. Lalit Bhasin",
        role: "President",
        org: "Society of Indian Law Firms",
      },
    ],
  },

  {
    year: "2020",
    messages: [
      {
        id: "no-data",
        name: "Sameer Chugh",
        role: "Group GC,Bharti Group",
        org: "Summit Chair, New Delhi Edition",
      },
      {
        id: "no-data",
        name: "Ms. Debolina Partap",
        role: "Group GC, Wockhardt Group",
        org: "Summit Chair, Mumbai Edition",
      },
    ],
  },

  {
    year: "2019",
    messages: [
      {
        id: "veta-richardson",
        name: "Ms. Veta T. Richardson",
        role: "President & CEO, ACC",
        org: "",
      },
      {
        id: "no-data",
        name: "Ms. Manjaree Chowdhary",
        role: "General Counsel, Maruti Suzuki",
        org: "Summit Chair, New Delhi Edition",
      },
      {
        id: "no-data",
        name: "Ms. Debolina Partap",
        role: "Group GC, Wockhardt Group",
        org: "Summit Chair, Mumbai Edition",
      },
      {
        id: "no-data",
        name: "Mr. Thirumalesh Gangappa",
        role: "Country Counsel, Google India",
        org: "Summit Chair, Bengaluru Edition",
      },
    ],
  },
];

const OfficialMessagesSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="font-roboto">
      {messageYears.map((yearData, yearIndex) => (
        <div key={yearData.year}>
          {/* Year Heading */}
          <h2 className="text-lg sm:text-xl font-normal text-[#333] mb-5 leading-tight">
            {yearData.year} Official Messages
          </h2>

          {/* Messages */}
          <div className="space-y-6">
            {yearData.messages.map((item, index) => (
              <div key={index}>
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
                  onClick={() => navigate(`/official-message/${item.id}`)}
                  className="mt-1 text-sm text-[#d61f26] hover:underline cursor-pointer"
                >
                  Read More...
                </button>
              </div>
            ))}
          </div>

          {/* Divider */}
          {yearIndex !== messageYears.length - 1 && (
            <div className="border-b border-gray-300 my-6 sm:my-8" />
          )}
        </div>
      ))}
    </aside>
  );
};

export default OfficialMessagesSidebar;
