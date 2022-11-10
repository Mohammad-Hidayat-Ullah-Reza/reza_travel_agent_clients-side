import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import CheapestFlight from "./CheapestFlight";
import Slider from "./Slider";

const Home = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/flights")
      .then((res) => res.json())
      .then((data) => setFlights(data))
      .catch((e) => console.log(e));
  }, []);
  const lastThreeServicesInfo = useLoaderData();
  return (
    <div>
      <ReactHelmet value={"Home"}></ReactHelmet>
      <Slider></Slider>
      <h2 className="text-4xl mt-20 text-blue-700 font-bold uppercase text-center">
        Trending tour packages
      </h2>
      {/* --------last three service card-------- */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 mt-20">
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
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center text-blue-700 my-10">
          Cheapest flights in popular route
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {flights.map((flight) => (
            <CheapestFlight key={flight._id} flight={flight}></CheapestFlight>
          ))}
        </div>
      </section>

      {/* ------app download------ */}
      <section className="my-10 md:my-20">
        <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Download our app Reza Travel Agent Now!!!
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Get the latest flight offers and &amp; start booking your flights
            now and visit your dream destination.
          </p>
          <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.apple.com/app-store/"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Mac App Store
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/games?hl=en&gl=US&pli=1"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
