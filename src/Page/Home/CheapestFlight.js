import React from "react";
import { IoIosAirplane, IoIosArrowForward } from "react-icons/io";

const CheapestFlight = ({ flight }) => {
  const { para1, para2 } = flight;
  return (
    <div className="flex items-center justify-center m-2 p-2 hover:-translate-y-2 hover:shadow-lg rounded-lg">
      <div className="mr-2 md:mr-4 text-blue-700">
        <IoIosAirplane></IoIosAirplane>
      </div>
      <div>
        <p>{para1}</p>
        <p>
          From <span className="font-bold">{para2}</span>
        </p>
      </div>
      <div className="ml-2 md:ml-4 text-blue-700">
        <IoIosArrowForward></IoIosArrowForward>
      </div>
    </div>
  );
};

export default CheapestFlight;
