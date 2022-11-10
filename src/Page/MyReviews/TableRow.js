import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ myReview, notifyDeleteConfirmation }) => {
  const { review, serviceName, _id } = myReview;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {review.length > 50 ? review.slice(0, 50) + "..." : review}
      </th>
      <td className="py-4 px-6">
        {serviceName.length > 20
          ? serviceName.slice(0, 15) + "..."
          : serviceName}
      </td>
      <td className="py-4 px-6">5 star</td>
      <td className="py-4 px-6">july</td>
      <td className="py-4 px-6">5 pm</td>

      <td className="flex items-center py-4 px-6 space-x-3">
        <Link
          to={`/review/${_id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => notifyDeleteConfirmation(_id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
