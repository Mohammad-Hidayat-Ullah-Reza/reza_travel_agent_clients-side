import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Home = () => {
  const lastThreeServicesInfo = useLoaderData();
  return (
    <div>
      <ReactHelmet value={"Home"}></ReactHelmet>
      <h1 className="text-4xl font-bold text-center mt-9">This is Home</h1>
      {/* --------last three service card-------- */}
      <div className="grid grid-cols-3 gap-3 p-5">
        {lastThreeServicesInfo.map((serviceInfo) => (
          <ServiceCard
            key={serviceInfo._id}
            serviceInfo={serviceInfo}
          ></ServiceCard>
        ))}
      </div>

      {/* --------Link for service page-------- */}
      <div className="flex items-center justify-center mt-5">
        <Link
          to="/services"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            All Services
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
