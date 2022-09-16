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
                    <div className="w-11/12 sm:w-10/12 lsm:w-9/12 md:w-4/6 lg:w-3/5 ">
                        <div className="mt-8 xs:mt-10 xsm:mt-14 md:mt-20 mb-20 ">
                            <Link to="/" className="flex justify-start items-center w-fit">
                                <span className="material-symbols-outlined text-sm xsm:text-2xs md:text-3xs text-center font-bold mr-1">arrow_back_ios</span>
                                <p className="text-base md:text-sm font-bold font-roboto hover:underline">Back</p>
                            </Link>
                            <h1 className="text-blue-purple font-bold font-roboto text-2xl md:text-3xl xs:text-3xl leading-7 xs:leading-9 mt-3 mb-5 xsm:mb-9 md:mb-14 sm:mt-3 md:mt-2">{data.title}</h1>
                            <div className="flex-col justify-center">
                                <div className="flex justify-center mb-4 xsm:mb-6 lsm:mb-10 md:mb-12">
                                    <img src="https://media.istockphoto.com/photos/photography-camera-lens-concept-picture-id922656500?k=20&m=922656500&s=612x612&w=0&h=buqn4KK7qm6TPy9EFtM7jSEhKVV7UdkxdLbxEL25UIQ="/>
                                </div>
                                <p className="text-xs xs:text-xsm font-medium leading-4 xs:leading-5 font-roboto mb-7 xsm:mb-10 md:mb-12">{data.body}</p>
                            </div>
                            <hr className="bg-light-gray/50 text-light-gray/50 h-[1.5px]" />
                            <CommentSection />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}      

export default InnerPage;