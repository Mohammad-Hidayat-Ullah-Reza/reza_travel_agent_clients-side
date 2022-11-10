import React from "react";

const ReviewCard = ({ reviewInfo }) => {
  const { displayName, review, photoURL, dateAndTime } = reviewInfo;
  console.log(reviewInfo);

  return (
    <article className="my-7">
      <div className="flex items-center mb-4 space-x-4">
        {/* --------reviewer photo and name-------- */}

        <img className="w-6 h-6" src={photoURL} alt="" />
        <div className="space-y-1 font-medium dark:text-white">
          <p>{displayName}</p>
        </div>
      </div>

      {/* --------review time and date-------- */}

      <footer className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed on <time dateTime={dateAndTime}>{dateAndTime}</time>
        </p>
      </footer>

      {/* --------review message-------- */}

      <p className="mb-2 font-light text-gray-500 dark:text-gray-400 break-words">
        {review}
      </p>
    </article>
  );
};

export default ReviewCard;
