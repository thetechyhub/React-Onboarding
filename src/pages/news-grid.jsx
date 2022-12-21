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
          <div className="h-12 xsm:h-10 bg-blue-purple flex justify-between px-3 lsm:px-5 md:px-20 lg:px-40 mb-10 shadow-lg">
            <div className="flex my-auto ml-2 xxs:ml-1 text-white font-roboto font-light text-2xs xs:text-xs lg:text-sm">
              <p className="mr-2 font-normal md:font-light">We are now hosting events with Zoom Webinars! <button className="font-bold underline xxs:ml-1 md:ml-2">Find out more</button></p>
            </div>
            <span className="material-symbols-outlined my-auto align-middle text-white text-2xl xsm:text-xl lg:text-lg cursor-pointer">close</span>
          </div>
          <h1 className="text-center text-blue-purple font-bold text-3xl justify-center font-roboto">
              Latest News
          </h1>
          <div className="w-full flex justify-center mt-1">
              <p className="text-center w-10/12 sm:w-9/12 lsm:w-8/12 md:w-6/12 lg:w-5/12 flex justify-center text-sm font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliq.
              </p>
          </div>
          <div className="container grid sm:grid-cols-2 lsm:grid-cols-3 gap-10 sm:gap-8 lsm:gap-6 lg:gap-8 mt-10 mb-20 mx-auto w-11/12 md:w-4/5 lg:w-8/12  justify-center">
              {data.slice(0,9).map(item => {
                return <div key={item.id}>
                  <div className="grid rounded-md overflow-hidden min-w-xs shadow-md min-h-full">
                      <div className="relative h-fit">
                          <img src="https://media.istockphoto.com/photos/photography-camera-lens-concept-picture-id922656500?k=20&m=922656500&s=612x612&w=0&h=buqn4KK7qm6TPy9EFtM7jSEhKVV7UdkxdLbxEL25UIQ=" className="w-full"/>
                          <p className="absolute bottom-4 right-5 rounded-full bg-blue-purple/60 px-5 py-1 font-bold text-2xs text-white font-roboto shadow-md">News</p>
                      </div>
                      <div className="px-5 py-4 flex flex-col justify-between gap-4">
                        <div>
                          <h2 className="font-bold text-xl leading-7 font-roboto w-3/4 line-clamp-2">{item.title}</h2>
                          <p className="text-light-gray text-sm w-11/12 mt-2 font-roboto line-clamp-2">{item.body}</p>
                        </div>
                        <div>
                          <Link to={`/posts/${item.id}`} key={item.id} className="text-blue-purple font-bold text-sm font-roboto hover:underline align-bottom">Read more</Link>
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