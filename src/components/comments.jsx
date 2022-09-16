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
        <div className="mt-6 xsm:mt-8 mb-4 flex-col justify-between">
          <h2 className="text-blue-purple font-bold font-roboto text-xl xsm:text-2xl md:3xl lg:4xl mb-3">Comments ({data.length})</h2>
          <input type="text" placeholder="Email" className="outline-none border-blue-purple/80 border-1 rounded w-9/12 xs:w-4/6 xsm:w-3/5 lsm:w-3/6 shadow-lg text-xs font-roboto font-medium placeholder-blue-purple/50 px-3 py-1 xsm:py-2 xsm:mb-4"/>
          {data.map(item => {
          return <div className="mx-auto flex justify-center border-b-[0.9px] border-b-light-gray border-opacity-40 last:border-b-[0] w-11/12">
                      <div className="mt-4 mb-4 xsm:mb-5 md:mb-6">
                          <a href = {`mailto: ${item.email}`} className="font-extrabold font-roboto text-xsm md:text-m">{item.email}</a>
                          <p className="text-xs md:text-sm leading-4 font-roboto font-normal text-dark-gray/80 mt-1 md:mt-2">{item.body}</p>
                      </div>
                  </div>
          })}
        </div>
    )
}

export default CommentSection;
