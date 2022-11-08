import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const servicesInfo = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {servicesInfo.map((serviceInfo) => (
          <ServiceCard
            key={serviceInfo._id}
            serviceInfo={serviceInfo}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
