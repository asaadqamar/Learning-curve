import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import GitHub from "./components/GitHub/GitHub";
import Contact from "./components/Contact/Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="conatct" element={<Contact />} />
      <Route path="github" element={<GitHub />} />
      <Route path="*" element={<div> Not Found </div>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
