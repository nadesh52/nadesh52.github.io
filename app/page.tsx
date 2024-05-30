import AppContainer from "@/components/AppContainer";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <article>
      <Navbar />

      <section className="max-w-screen-sm mt-10 p-6 mx-auto" id="container">
        <AppContainer />
      </section>
    </article>
  );
};

export default Home;
