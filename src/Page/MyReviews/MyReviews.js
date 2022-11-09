import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import TableRow from "./TableRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const allMyReviews = useLoaderData();
  console.log(allMyReviews);
  return (
    <div className="text-center m-7">
      <h1 className="text-4xl font-bold">List of my Reviews</h1>
      <p className="text-xl font-semibold">{user?.displayName}</p>
      <p className="text-xl font-semibold">{user?.email}</p>

      {/* ---------table start--------- */}

      <div class="overflow-x-auto m-5 relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Review
              </th>
              <th scope="col" class="py-3 px-6">
                Service
              </th>
              <th scope="col" class="py-3 px-6">
                Rating
              </th>
              <th scope="col" class="py-3 px-6">
                Time
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allMyReviews.map((allMyReview) => (
              <TableRow
                key={allMyReview._id}
                allMyReview={allMyReview}
              ></TableRow>
            ))}
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">name</td>
              <td class="py-4 px-6">5 star</td>
              <td class="py-4 px-6">july</td>

              <td class="flex items-center py-4 px-6 space-x-3">
                <a
                  href="/"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="/"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
