import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

const AddService = () => {
  //this toast notifies after adding service is successfull
  const notifyAddService = () => toast.success("Successfully Service Added!");

  // this handler handles adding service
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updatedReview = {
      name,
      picture,
      price,
      rating,
      about: description,
    };
    fetch(
      `https://b6a11-service-review-server-side-omega.vercel.app/addService`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notifyAddService();
        }

        form.reset();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-5 mb-7 lg:p-10 flex justify-center items-center">
      <ReactHelmet value={"Add Service"}></ReactHelmet>

      <form
        onSubmit={handleAddService}
        className="md:w-3/4 lg:w-1/2 shadow-xl p-5 rounded-xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-3">
          Add A New Service
        </h2>
        <div className="grid gap-6 mb-3 grid-cols-1">
          {/* -------Service Name------- */}

          <div>
            <label
              htmlFor="service_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Service Name
            </label>
            <input
              type="text"
              id="service_name"
              aria-label="service name"
              name="name"
              placeholder="name of the service"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* -------Picture------- */}

          <div>
            <label
              htmlFor="picture_URL"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Picture URL
            </label>
            <input
              type="text"
              id="picture_URL"
              aria-label="picture URL"
              name="picture"
              placeholder="URL of picture"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* -------Price------- */}

          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              aria-label="price"
              name="price"
              placeholder="price of service"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* -------Rating------- */}

          <div>
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              aria-label="rating"
              name="rating"
              className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={0}
              disabled
            />
          </div>

          {/* -------description field------- */}

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Service Description
            </label>
            <textarea
              id="description"
              rows="6"
              name="description"
              placeholder="description of service"
              className="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        {/* -------buttons------- */}

        <div className="flex items-center justify-start">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
          <Toaster></Toaster>
          <Link
            to="/reviews"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddService;
