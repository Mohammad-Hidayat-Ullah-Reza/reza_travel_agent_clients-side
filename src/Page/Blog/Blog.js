import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

const Blog = () => {
  const articles = useLoaderData();
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <ReactHelmet value={"Blog"}></ReactHelmet>

      <h2 className="text-4xl text-blue-700 text-center font-bold uppercase my-10 md:my-16 border-b-2 pb-4 w-fit border-black ">
        Welcome to the Blog Page of{" "}
        <span className="text-red-700">Reza Travel Agent</span>
      </h2>

      {articles.map((a) => (
        <article
          className="my-7 p-5 hover:rounded-lg hover:shadow-xl"
          key={a._id}
        >
          <h3 className="text-2xl font-bold text-red-700 text-left mb-3">
            # {a.question}
          </h3>
          <p className="text-lg font-semibold text-justify">{a.answer}</p>
        </article>
      ))}
    </div>
  );
};

export default Blog;
