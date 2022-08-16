import React from "react";

const CommentList = (props) => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-lg font-semibold">{props.email}</h1>
        <p>{props.body}</p>
      </div>
      <div className="border-b-2 border-gray-300" />
    </>
  );
};

export default CommentList;
