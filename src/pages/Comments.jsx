import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import CommentList from "../components/CommentList";

const Comments = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { title, body } = location.state;

  const { id } = useParams();
  const navigate = useNavigate();

  const url = `https://jsonplaceholder.typicode.com/post/${id}/comments`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (!input) return data;

    return data.filter((element) =>
      element.email.toLowerCase().includes(input.toLowerCase())
    );
  }, [data, input]);

  const displayComment = filteredData.map((element) => {
    return (
      <CommentList
        key={element.id}
        name={element.name}
        email={element.email}
        body={element.body}
      />
    );
  });

  const searchHandler = useCallback(
    (inputData) => {
      setInput(inputData.target.value);
    },
    [input]
  );

  const imgSrc = `https://www.flourishaustralia.org.au/sites/default/files/styles/body/public/2020-06/30_jun_-_reading_npp.jpg?itok=5dMm7TGD`;

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam est, condimentum at felis vitae, efficitur ornare ex. Curabitur nec accumsan ipsum. Curabitur placerat, ex quis elementum feugiat, ex eros ultrices magna, vel ornare nunc nisl a turpis. Donec ullamcorper sapien quis est porta, at rutrum dolor aliquet. Mauris id venenatis ipsum. Nullam ut sem in lectus malesuada luctus eget ac augue. Nulla sed imperdiet leo. Integer molestie blandit augue commodo laoreet. Proin mollis in lorem in venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque in tempor lectus. Proin consequat, dui ullamcorper sodales aliquam, massa mauris ultrices quam, non ullamcorper nulla nisi quis velit";

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data is loading...</p>;

  return (
    <div className="container p-10">
      <button onClick={() => navigate(-1)}>
        <span>&#x1F878;</span>Back
      </button>
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="font-bold leading-tight text-4xl mt-0 mb-2 text-indigo-900 pb-5">
          {title}
        </h1>
        <div className="pb-5">
          <img className="object-cover" src={imgSrc} />
        </div>
        <p>{`${body} ${lorem}`}</p>
      </div>
      <div className="border-b-2 border-gray-300"></div>
      <div className="p-5">
        <h1 className="font-bold text-2xl text-indigo-900 pb-5">
          Comment({data.length})
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="mb-5 text-xl outline outline-indigo-900 pl-5 py-1 rounded"
          onChange={searchHandler}
        />
        <div>
          {/* {data.map((element) => (
            <CommentList
              key={element.id}
              name={element.name}
              email={element.email}
              body={element.body}
            />
          ))} */}
          {displayComment}
        </div>
      </div>
    </div>
  );
};

export default Comments;
