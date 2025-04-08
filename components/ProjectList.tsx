import React from "react";
import { appItems } from "@/constants";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projectsRef }: any) {
  return (
    <section ref={projectsRef} className="mx-auto w-full bg-gray-950">
      <div className="flex py-4 items-center justify-center">
        <h3 className="text-center text-[80px] font-medium leading-[88px] tracking-[0.1em] text-white">
          SELECTED LATEST WORKS
        </h3>
      </div>
      <ul className="mx-auto grid w-full grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {appItems.map((item, index) => (
          <li key={index}>
            <ProjectCard items={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
