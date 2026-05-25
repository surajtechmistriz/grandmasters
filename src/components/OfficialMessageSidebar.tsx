import React from "react";
import { useNavigate } from "react-router-dom";

const OfficialMessagesSidebar = ({ year, messages }) => {

  const navigate = useNavigate()
  return (
    <div>
      {/* Heading */}
      <h2 className="text-[20px] font-normal text-[#1d2b44] mb-5">
        {year} Official Messages
      </h2>

      {/* Messages */}
      <div className="space-y-6">
        {messages.map((item, index) => (
          <div key={index}>
            <h3 className="font-bold text-[15px] text-[#1d2b44]">
              {item.name}
            </h3>

            <p className="text-[15px] font-normal text-[#1d2b44] mt-1">
              {item.role}
            </p>

            {item.org && (
              <p className="text-[12px] font-normal text-[#1d2b44] mt-1">
                {item.org}
              </p>
            )}

            <button onClick={()=> navigate("/official-message")} className="text-[#d61f26] text-[15px] font-normal mt-1 hover:underline cursor-pointer">
              Read More...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialMessagesSidebar;