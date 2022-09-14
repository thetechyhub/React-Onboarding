import { useEffect, useState } from "react";
import React from "react"; 
import { useParams } from "react-router-dom";

const CommentSection = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const apiGet = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
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
        <>
        <h1 className="text-blue-purple font-bold font-roboto lg:text-3xl md:text-2xl sm:text-xl xsm:text-lg xs:text-base xxs:text-xs lg:mt-8 md:mt-8 sm:mt-8 xsm:mt-8 xs:mt-5 xxs:mt-3 lg:mb-5 md:mb-5 sm:mb-5 xsm:mb-5 xs:mb-3 xxs:mb-0">Comments ({data.length})</h1>
        <input type="text" placeholder="Email" className="outline-none border-blue-purple/80 border-1 rounded lg:w-6/12 md:w-6/12 sm:w-6/12 xsm:w-6/12 xs:w-6/12 xxs:w-6/12 shadow-lg lg:text-xs md:text-xs sm:text-xs xsm:text-2xs xs:text-3xs xxs:text-4xs font-roboto font-medium placeholder-blue-purple/50 px-3 lg:py-2 md:py-2 sm:py-2 xsm:py-2 xs:py-1 xxs:py-1 lg:mb-4 md:mb-4 sm:mb-4 xsm:mb-4 xs:mb-4 xxs:mb-2"/>
            {data.map(item => {
                return <div className="flex justify-center">
                        <div className="lg:w-11/12 md:w-11/12 sm:w-10/12 xsm:w-10/12 xs:w-10/12 xxs:w-10/12">
                            <div className="lg:my-5 md:my-5 sm:my-5 xsm:my-2 xs:my-2 xxs:my-1">
                            <a href = {`mailto: ${item.email}`} className="font-extrabold font-roboto lg:text-m md:text-xs sm:text-xs xsm:text-2xs xs:text-3xs xxs:text-4xs">{item.email}</a>
                                <p className="lg:text-m md:text-xs sm:text-xs xsm:text-2xs xs:text-3xs xxs:text-4xs lg:leading-6 md:leading-5 sm:leading-5 xsm:leading-4 xs:leading-4 xxs:leading-3 font-roboto font-normal text-dark-gray/70 lg:mt-3 md:mt-3 sm:mt-3 xsm:mt-1">{item.body}</p>
                            </div>
                            <hr className="border-light-gray"/>
                        </div>
                    </div>
            })}
        </>
    )
}

export default CommentSection;
