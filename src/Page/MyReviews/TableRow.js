import React from "react";

const TableRow = ({ myReview, handleDeleteReview }) => {
  const { review, serviceName, _id } = myReview;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {review.slice(0, 50)}...
      </th>
      <td className="py-4 px-6">{serviceName}</td>
      <td className="py-4 px-6">5 star</td>
      <td className="py-4 px-6">july</td>

      <td className="flex items-center py-4 px-6 space-x-3">
        <a
          href="/"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <button
          onClick={() => handleDeleteReview(_id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
