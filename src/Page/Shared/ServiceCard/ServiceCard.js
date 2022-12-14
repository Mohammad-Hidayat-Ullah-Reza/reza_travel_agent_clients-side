import React from "react";
import { Link } from "react-router-dom";
import PhotoViewer from "../PhotoViewer/PhotoViewer";

const ServiceCard = ({ serviceInfo }) => {
  const { _id, about, name, picture, price } = serviceInfo;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="h-1/2 overflow-hidden">
        {/* <img className="rounded-t-lg w-full h-full" src={picture} alt={name} /> */}
        <PhotoViewer picture={picture} name={name}></PhotoViewer>
      </div>
      <div className="p-5 h-1/2 flex flex-col items-start justify-between">
        <Link to={`/services/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name.slice(0, 50)}
          </h5>
        </Link>
        <div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {about.slice(0, 100)}...
          </p>
          <div className="flex items-center justify-between">
            <Link
              to={`/services/${_id}`}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <p className="text-lg text-red-700 font-semibold">
              Price: {price} Tk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
