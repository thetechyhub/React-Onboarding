import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const imgSrc =
    props.id % 2
      ? `https://studenthut.com/img/uploads/rsz-the-climate-reality-project-hb6uwq0i4mi-unsplash.1602242537448.jpg?height=550&width=800`
      : `https://www.flourishaustralia.org.au/sites/default/files/styles/body/public/2020-06/30_jun_-_reading_npp.jpg?itok=5dMm7TGD`;
  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <div class="absolute bottom-3 right-3 rounded-full bg-indigo-900 bg-opacity-75 px-4 py-1">
          <p className="text-xs text-white font-bold">News</p>
        </div>
        <img className="rounded-t-lg h-40 w-full" src={imgSrc} alt="" />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
          {props.title ? props.title : ""}
        </h5>
        <p className="mb-3 font-medium text-gray-500 dark:text-gray-400 truncate">
          {props.body ? props.body : ""}
        </p>
        <Link
          to={`${props.id}/comments`}
          state={{ title: props.title, body: props.body }}
        >
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
