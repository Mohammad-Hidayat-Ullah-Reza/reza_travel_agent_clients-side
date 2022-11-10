import React from "react";

const ReviewCard = ({ reviewInfo }) => {
  const { displayName, email, review, serviceId, _id, photoURL } = reviewInfo;

  return (
    <article>
      <div className="flex items-center mb-4 space-x-4">
        {/* --------reviewer photo and name-------- */}

        <img
          className={photoURL}
          src="/docs/images/people/profile-picture-5.jpg"
          alt=""
        />
        <div className="space-y-1 font-medium dark:text-white">
          <p>{displayName}</p>
        </div>
      </div>

      {/* --------review time and date-------- */}

      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed on <time dateTime="2017-03-03 19:00">March 3, 2017</time>
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
