import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page from "./Page";
import Comments from "./Comments";

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/page" />} />
        <Route path="/page">
          <Route index element={<Page />} />
          <Route path=":id/comments" element={<Comments />} />
        </Route>
        <Route path="*" element={""} />
      </Routes>
    </>
  );
}

export default Home;
