import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

const UpdateReview = () => {
  const { _id, review, serviceName, dateAndTime } = useLoaderData();

  //this toast notifies after update review is successful
  const notifyReview = () => toast.success("Successfully Review Updated!");

  // this handler handles update review
  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const textAreaReview = form.textAreaReview.value;
    const updatedReview = {
      review: textAreaReview,
    };
    fetch(
      `https://b6a11-service-review-server-side-omega.vercel.app/updateReview/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          notifyReview();
        }
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-5 mb-7 lg:p-10 flex justify-center items-center">
      <ReactHelmet value={"Update Review"}></ReactHelmet>

      <form
        onSubmit={handleUpdateReview}
        className="md:w-3/4 lg:w-1/2 shadow-xl p-5 rounded-xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-3">
          Change Your Review
        </h2>
        <div className="grid gap-6 mb-3 grid-cols-1">
          {/* -------Service------- */}

          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Service
            </label>
            <input
              type="text"
              id="first_name"
              aria-label="first name"
              className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={serviceName}
              disabled
            />
          </div>

          {/* -------Date------- */}

          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Date and Time of Review
            </label>
            <input
              type="text"
              id="first_name"
              aria-label="first name"
              className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={dateAndTime}
              disabled
            />
          </div>

          {/* -------review field------- */}

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Review
            </label>
            <textarea
              id="message"
              rows="6"
              name="textAreaReview"
              className="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={review}
            ></textarea>
          </div>
        </div>

        {/* -------buttons------- */}

        <div className="flex items-center justify-start">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Change
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

export default UpdateReview;
