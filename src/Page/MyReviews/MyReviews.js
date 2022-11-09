import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import TableRow from "./TableRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((e) => console.log(e));
  }, [user?.email]);

  //this toast asks for confirmation to delete the review
  const notifyDeleteConfirmation = (id) => {
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
                Are you sure you want to delete?
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => handleDeleteConfirmation(t.id, id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  const handleDeleteConfirmation = (toastId, id) => {
    toast.dismiss(toastId);
    handleDeleteReview(id);
  };

  const handleDeleteReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingMyReviews = myReviews.filter((rev) => rev._id !== id);
          setMyReviews(remainingMyReviews);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="text-center m-7">
      <ReactHelmet value={"My Reviews"}></ReactHelmet>

      <h1 className="text-4xl font-bold">List of my Reviews</h1>
      <p className="text-xl font-semibold">{user?.displayName}</p>
      <p className="text-xl font-semibold">{user?.email}</p>

      {/* ---------table start--------- */}

      <div className="overflow-x-auto m-5 relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* ---------table head--------- */}

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Review
              </th>
              <th scope="col" className="py-3 px-6">
                Service
              </th>
              <th scope="col" className="py-3 px-6">
                Rating
              </th>
              <th scope="col" className="py-3 px-6">
                Time
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* --------table rows-------- */}

            {myReviews.map((myReview) => (
              <TableRow
                key={myReview._id}
                myReview={myReview}
                handleDeleteReview={handleDeleteReview}
                notifyDeleteConfirmation={notifyDeleteConfirmation}
              ></TableRow>
            ))}
            <Toaster />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
