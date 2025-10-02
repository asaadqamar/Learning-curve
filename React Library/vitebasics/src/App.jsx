import React, { useState } from "react";
import Youtube from "./Youtube";

const imgElement = React.createElement(
  "a",
  {
    href: "./image.jpg",
    target: "_blank",
  },
  "Click here"
);

function App() {
  return (
    <>
      <h1>hello</h1>
      <Youtube />
      {imgElement}
      <p>hii</p>
    </>
  );
}

export default App;
