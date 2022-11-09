import React, { useContext, useEffect, useState } from "react";
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

  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingMyReviews = myReviews.filter(
              (rev) => rev._id !== id
            );
            setMyReviews(remainingMyReviews);
          }
        })
        .catch((e) => console.log(e));
    }
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
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
