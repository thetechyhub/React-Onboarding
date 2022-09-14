import React from "react";
import NewsGrid from "./news-grid";
import InnerPage from "./inner-page";
import CommentSection from "../components/comments"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NewsGrid />}/>
          <Route path="/posts/:id">
            <Route index element={<InnerPage/>}/>
            <Route path=":id/comments" element={<CommentSection/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Home;
