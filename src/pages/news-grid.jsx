import React from "react";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";

const NewsGrid = () => {
const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      console.log(json)
    });
  }

  useEffect(() => {
    return apiGet()
  }, []);

    return (
        <div>
          <div className="lg:h-8 md:h-7 sm:h-7 xs:h-8 xxs:h-7 bg-blue-purple flex justify-between lg:px-40 md:px-20 sm:px-10 xs:px-5 xxs:px-3 mb-5 shadow-lg">
            <div className="flex text-white font-roboto font-light lg:text-sm md:text-xs sm:text-xs xs:text-xs xsm:text-2xs xxs:text-3xs ">
              <p className="m-auto mr-5 xxs:mr-2 align-middle">We are now hosting events with Zoom Webinars!</p>
              <button className="font-bold underline">Find out more</button>
            </div>
            <span className="material-symbols-outlined my-auto align-middle text-white text-sm cursor-pointer">close</span>
          </div>
          <h1 className="pt-10 xs:pt-8 xsm:pt-7 xxs:pt-6 text-center text-blue-purple font-bold text-3xl justify-center font-roboto">
              Latest News
          </h1>
          <div className="w-full flex justify-center mt-3">
              <p className="text-center lg:w-2/4 md:w-3/5 sm:w-3/4 xs:w-9/12 xsm:w-9/12 xxs:w-10/12 flex justify-center text-sm font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliq.
              </p>
          </div>
          <div className="grid container lg:grid-cols-3 md:grid-cols-3 lsm:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 2xl:grid-cols-5 lg:gap-10 md:gap-8 lsm:gap-4 sm:gap-8 xsm:gap-5 xs:gap-10 xxs:gap-10 mt-10 mb-20 mx-auto lg:w-3/4 md:w-10/12 lsm:w-11/12 sm:w-10/12 xsm:w-10/12 xs:w-10/12 xxs:w-11/12 justify-center">
              {data.slice(0,9).map(item => {
                return <div key={item.id}>
                  <div className="grid rounded-md overflow-hidden min-w-xs shadow-md min-h-full">
                      <div className="relative h-fit">
                          <img src="https://media.istockphoto.com/photos/photography-camera-lens-concept-picture-id922656500?k=20&m=922656500&s=612x612&w=0&h=buqn4KK7qm6TPy9EFtM7jSEhKVV7UdkxdLbxEL25UIQ=" className="w-full"/>
                          <p className="absolute bottom-4 right-5 rounded-full bg-blue-purple/60 px-5 py-1 font-bold text-xxs text-white font-roboto shadow-md">News</p>
                      </div>
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h1 className="font-bold text-xl font-roboto w-3/4 line-clamp-2">{item.title}</h1>
                          <p className="text-light-gray text-xs w-11/12 mb-5 mt-1 font-roboto line-clamp-2">{item.body}</p>
                        </div>
                        <div>
                          <Link to={`/posts/${item.id}`} key={item.id} className="text-blue-purple font-bold text-xs font-roboto hover:underline align-bottom">Read more</Link>
                        </div>
                      </div>
                  </div>   
                </div>
              })}
          </div>
        </div>
    )
}

export default NewsGrid;