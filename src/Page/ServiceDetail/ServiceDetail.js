import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import ReviewCard from "./ReviewCard";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetail = () => {
  const { _id, about, name, picture, price, rating } = useLoaderData();
  const { user, reviewsInfo, setReviewsInfo } = useContext(AuthContext);
  const location = useLocation();

  //  if the user not logged in, this toast will tell the user to login
  const notifyLogin = (event) => {
    event.preventDefault();
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                You need to login to add Review
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button onClick={() => toast.dismiss(t.id)}>
            <Link
              to="/login"
              state={{ from: location }}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </Link>
          </button>
        </div>
      </div>
    ));
  };

  //this toast notifies after adding review is successful
  const notifyAddReview = () => toast.success("Successfully Review Added!");

  useEffect(() => {
    handleGetReviews();
  }, []);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const displayName = user.displayName;
    const email = user.email;
    const serviceId = _id;
    const serviceName = name;
    const photoURL = user.photoURL;
    const doc = {
      serviceId,
      serviceName,
      displayName,
      email,
      photoURL,
      review,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        notifyAddReview();
        console.log(data);
        handleGetReviews();
        form.reset();
      })
      .catch((e) => console.log(e));
  };

  const handleGetReviews = () => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviewsInfo(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="">
      <ReactHelmet value={name}></ReactHelmet>

      <section>
        <div className="md:h-screen overflow-hidden relative">
          <img src={picture} alt={name} className="" />
          <div className="w-full absolute top-6 md:top-1/3 flex justify-center">
            <div className="w-4/5 lg:w-1/2 border-4 border-white">
              <h2 className=" text-2xl lg:text-4xl text-center text-white font-bold uppercase border-4 p-7 border-white">
                {name}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-7">
          <p className="text-2xl font-semibold mb-2 text-orange-500">
            Pricing: {price} Tk.
          </p>
          <p className="text-2xl font-semibold mb-2 text-blue-700">
            Rating:{" "}
            <span className="py-.5 px-2 bg-blue-700 rounded text-white">
              {rating}
            </span>{" "}
          </p>
          <p className="text-xl text-justify">{about}</p>
        </div>
      </section>
      <section className="p-7">
        {/* --------add review form start-------- */}
        <div>
          <form onSubmit={user?.uid ? handleAddReview : notifyLogin}>
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="review" className="sr-only">
                  Your review
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a review..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Add Review
                </button>
                <Toaster />
              </div>
            </div>
          </form>
        </div>
        {/* --------add review form end-------- */}
        <p className="text-2xl  text-orange-500 mt-14 mb-7 font-bold uppercase">
          All Reviews:
        </p>
        {reviewsInfo.map((reviewInfo) => (
          <ReviewCard key={reviewInfo._id} reviewInfo={reviewInfo}></ReviewCard>
        ))}
      </section>
    </div>
  );
};

export default ServiceDetail;
