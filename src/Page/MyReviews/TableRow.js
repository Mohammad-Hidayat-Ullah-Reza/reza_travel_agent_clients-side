import React from "react";

const TableRow = ({ allMyReview }) => {
  const { review, serviceName } = allMyReview;
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {review.slice(0, 50)}...
      </th>
      <td class="py-4 px-6">{serviceName}</td>
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
    </tr>
  );
};

export default TableRow;
