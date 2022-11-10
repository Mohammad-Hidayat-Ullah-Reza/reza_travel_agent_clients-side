import { useLoaderData } from "react-router-dom";

import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const servicesInfo = useLoaderData();

  return (
    <div className="my-7">
      <ReactHelmet value={"Services"}></ReactHelmet>
      <h2 className="text-4xl font-bold text-center my-5">
        Popular Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
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
