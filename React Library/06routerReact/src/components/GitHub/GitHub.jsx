import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function GitHub() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/hiteshchoudhary`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log(typeof data);
      });
  }, []);
  return (
    <>
      <div className="m-5 py-5 bg-black text-white text-center text-3xl">
        Followers {data.followers}
        <img src={data.avatar_url} alt="" srcset="" />
      </div>
    </>
  );
}

export default GitHub;
