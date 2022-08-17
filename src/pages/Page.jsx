import React, { useState, useEffect } from "react";
import Card from "../components/UI/Card";

function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://jsonplaceholder.typicode.com/posts`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data is loading...</p>;

  console.log("here121");

  // console.log(data);

  return (
    <>
      <div className="p-10 flex flex-col">
        <h1 className="py-5 w-full text-center text-indigo-900 font-bold text-4xl">
          Latest News
        </h1>
        <p className="text-center sm:px-40 pb-20 xl:w-3/5 place-self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          saepe quibusdam praesentium odit nihil ipsum id! Quo quos mollitia,
          alias ipsa, accusantium explicabo nisi cumque praesentium doloremque,
          suscipit repellendus inventore.
        </p>
        <div className="mx-auto grid grid-rows-1 gap-2 justify-items-center md:grid-cols-3">
          {data.map((element) => (
            <Card
              key={element.id}
              id={element.id}
              title={element.title}
              body={element.body}
            />
          ))}
          {/* <div className="box"></div> */}
        </div>
      </div>
    </>
  );
}

export default Page;
