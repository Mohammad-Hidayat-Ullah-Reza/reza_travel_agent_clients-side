import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import ReviewCard from "./ReviewCard";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetail = () => {
  const { _id, about, name, picture, price, rating } = useLoaderData();
  const { user, reviewsInfo, setReviewsInfo } = useContext(AuthContext);

  //  if the user not logged in, this toast will tell the user to login
  const notify = (event) => {
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
          <Link
            to="/login"
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </Link>
        </div>
      </div>
    ));
  };

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
    <div className="m-5 p-5">
      <ReactHelmet value={"Services Details"}></ReactHelmet>

      <section>
        <h2>{name}</h2>
        <p>{_id}</p>
        <p>{price}</p>
        <p>{about}</p>
      </section>
      <section>
        {/* --------add review form start-------- */}
        <div>
          <form onSubmit={user?.uid ? handleAddReview : notify}>
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  name="review"
                  rows="4"
                  className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a review..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button
                  type="type"
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
        <p>User Reviews:</p>
        {reviewsInfo.map((reviewInfo) => (
          <ReviewCard key={reviewInfo._id} reviewInfo={reviewInfo}></ReviewCard>
        ))}
      </section>
    </div>
  );
};

export default ServiceDetail;
