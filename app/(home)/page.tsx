"use client";
import React, { useRef } from "react";
import TechList from "@/components/TechList";
import Contact from "@/components/Contact";
import ProjectList from "@/components/ProjectList";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingMenu from "@/components/FloatingMenu";

const Home = () => {
  const profileRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  return (
    <section className="w-full">
      <FloatingMenu
        profileRef={profileRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Header projectsRef={projectsRef} contactRef={contactRef} />
      <Hero profileRef={profileRef} projectsRef={projectsRef} />
      <TechList />
      <ProjectList projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </section>
  );
};

export default Home;
