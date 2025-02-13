import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white h-96 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="icon-container ">{icon}</div>
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <p className="text-gray-600 text-center ">{description}</p>
      <div className=" flex items-center gap-2 relative top-10">
        <button className="text-violet-900 text-sm font-bold flex items-center">
          EXPLORE THIS SERVICE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#4c1d95"
            viewBox="0 0 24 24"
            className="ml-2"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
