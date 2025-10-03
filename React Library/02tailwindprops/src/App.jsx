import { useState } from "react";
import Testimonial from "./components/testimonial";
import "./App.css";

function App() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32 bg-black min-w-full">
        <div className="container mx-auto px-4">
          <h3 className="font-heading text-3xl font-bold text-white mb-8">
            Recent reviews
          </h3>
          <Testimonial
            name="Ali"
            content="Just a review"
            date="25-03-2045"
            tRating="5"
            title="This is dumb products"
            position="AI Enginners"
          />
          <Testimonial
            name="Ali"
            content="Review for all"
            date="25-03-2045"
            tRating="5"
            title="Review for all"
            position="AI Enginners"
          />
          <Testimonial
            name="Ali"
            content="HOla review for servce"
            date="25-03-2045"
            tRating="5"
            title="HOla review for servce"
            position="AI Enginners"
          />
        </div>
      </section>
    </>
  );
}

export default App;
