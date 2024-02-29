import React from "react";

interface MembershipOptionItemProps {
  title: string;
  features: string[];
}

const MembershipOptionItemRenderer: React.FC<MembershipOptionItemProps> = ({
  title,
  features,
}) => {
  return (
    <div className="rounded-md shadow-md overflow-hidden mb-20">
      <div className="text-center h-full bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <div className="flex flex-col no-underline hover:no-underline">
          <div className="font-bold text-3xl text-gray-800 px-6 my-10">
            {title}
          </div>
          {features.map((feature, index) => (
            <p key={index} className="m-2">
              {feature}
            </p>
          ))}
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow rounded-full h-full">
          <div className="flex items-center justify-center">
            <div
              style={{
                backgroundColor: "#F1900E",
                borderRadius: 30,
                marginTop: 64,
              }}
              className="mt-[64px] mb-11"
            >
              <button className="font-bold text-white bg-[#F1900E] py-3 px-5  rounded-full  hover:opacity-80 hover:scale-105">
                INQUIRE FOR RATES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipOptionItemRenderer;
