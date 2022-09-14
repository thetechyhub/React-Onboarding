import React from "react"; 
import {Link} from 'react-router-dom';
import CommentSection from "../components/comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const InnerPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const apiGet = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      console.log(json);
    })  
  };

  useEffect(() => {
    return apiGet();
  }, []);

    return (
        <div key={data.id}>
            <div className="flex justify-center">
                <div className="flex justify-center">
                    <div className="lg:w-3/5 md:w-3/5 sm:w-9/12 xsm:w-10/12 xs:w-10/12 xxs:w-10/12">
                        <div className="lg:mt-20 md:mt-10 sm:mt-10 xsm:mt-10 xs:mt-10 xxs:mt-10 mb-20">
                            <Link to="/" className="flex justify-start items-center w-3">
                                <span className="material-symbols-outlined lg:text-2xs md:text-2xs sm:text-3xs xsm:text-3xs xs:text-3xs xxs:text-5xs text-center font-bold lg:mr-2 md:mr-2 sm:mr-2 xsm:mr-2 xs:mr-1 xxs:mr-1">arrow_back_ios</span>
                                <p className="lg:text-sm md:text-sm sm:text-xs xsm:text-xs xs:text-xs xxs:text-3xs font-bold font-roboto hover:underline">Back</p>
                            </Link>
                            <h1 className="text-blue-purple font-bold font-roboto lg:text-3xl md:text-2xl sm:text-2xl xsm:text-xl xs:text-base xxs:text-m lg:mt-4 md:mt-4 sm:mt-6 xsm:mt-4 xs:mt-3 xxs:mt-2 lg:mb-6 md:mb-6 sm:mb-5 xsm:mb-3 xs:mb-3 xxs:mb-2">{data.title}</h1>
                            <div className="flex justify-center">
                                <div className="flex justify-center lg:mb-10 md:mb-8 sm:mb-10 xsm:mb-5 xs:mb-3 xxs:mb-3">
                                    <img src="https://media.istockphoto.com/photos/photography-camera-lens-concept-picture-id922656500?k=20&m=922656500&s=612x612&w=0&h=buqn4KK7qm6TPy9EFtM7jSEhKVV7UdkxdLbxEL25UIQ="/>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <p className="lg:text-xsm md:text-xsm sm:text-xsm xsm:text-xs xs:text-2xs xxs:text-3xs font-medium font-roboto lg:mb-10 md:mb-8 sm:mb-6 xsm:mb-6 xs:mb-4 xxs:mb-3">{data.body}</p>
                            </div>
                            <hr />
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}      

export default InnerPage;