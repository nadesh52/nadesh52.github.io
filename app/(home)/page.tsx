"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  BriefcaseIcon as BriefcaseSolid,
  UserIcon as UserSolid,
} from "@heroicons/react/24/solid";
import TechList from "./components/TechList";
import Contact from "./components/Contact";
import FloatButton from "./components/FloatButton";
import ProjectList from "./components/ProjectList";
import ResumeButton from "./components/ResumeButton";

const Home = () => {
  const [position, setPosition] = useState<any>();

  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setPosition(window.scrollY);
      });
    };
  }, []);

  return (
    <article className="relative w-full bg-slate-100">
      <div className="relative mx-auto max-w-screen-md">
        <nav className={`flex items-center gap-8 pt-10`}>
          <button
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-xl hover:text-type-fire-normal hover:underline"
          >
            Projects
          </button>
          <button
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-xl hover:text-type-fire-normal hover:underline"
          >
            Contact
          </button>
        </nav>

        <nav
          className={`${position >= 200 ? "flex" : "hidden"} fixed right-8 top-1/2 z-50 -translate-y-1/2 flex-col items-end gap-4`}
        >
          <FloatButton
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            title="Projects"
          >
            {position >= 900 && position < 2380 ? (
              <BriefcaseSolid className="size-12 rounded-full bg-type-fire-normal p-2 text-white" />
            ) : (
              <BriefcaseIcon className="size-12 rounded-full bg-type-fire-normal p-2 text-white" />
            )}
          </FloatButton>

          <FloatButton
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            title="Contact"
          >
            {position >= 2380 ? (
              <UserSolid className="size-12 rounded-full bg-type-fire-normal p-2 text-white" />
            ) : (
              <UserIcon className="size-12 rounded-full bg-type-fire-normal p-2 text-white" />
            )}
          </FloatButton>

          {position >= 300 && (
            <button
              onClick={() => window.scrollTo({ top: 200, behavior: "smooth" })}
              className="rounded-full border border-type-fire-normal bg-white"
            >
              <ArrowUpIcon className="size-12 stroke-2 p-2 text-type-fire-normal" />
            </button>
          )}
        </nav>

        <div className="mb-20 pt-40">
          <h2 className="text-3xl font-medium">I'm,</h2>
          <h1 className="my-2 text-5xl font-medium text-type-fire-normal">
            Adoolwit Bootpo
          </h1>

          <ResumeButton />

          <p className="text-xl">
            A self-taught web developer, passionate in data and coding. Some of
            my{" "}
            <span
              onClick={() =>
                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer font-medium text-type-fire-normal hover:underline"
            >
              personal projects
            </span>{" "}
            below.
          </p>
        </div>

        <TechList />
        <ProjectList ref={projectsRef} />

        <Contact ref={contactRef} />
      </div>
    </article>
  );
};

export default Home;
