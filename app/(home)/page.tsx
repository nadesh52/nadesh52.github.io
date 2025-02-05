"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpIcon,
  BriefcaseIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  BriefcaseIcon as BriefcaseSolid,
  UserCircleIcon as UserCircleSolid,
  UserIcon as UserSolid,
} from "@heroicons/react/24/solid";
import TechList from "./components/TechList";
import Contact from "./components/Contact";
import FloatButton from "./components/FloatButton";
import ProjectList from "./components/ProjectList";
import ResumeButton from "./components/ResumeButton";

const Home = () => {
  const [position, setPosition] = useState<any>();

  const profileRef = useRef<any>(null);
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
    <section className="mx-auto max-w-screen-md p-8 lg:px-0">
      <nav className='flex items-center justify-end gap-8'>
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

{/* floating menu */}
      <nav className="hidden lg:block">
        <div
          className={`${position >= 200 ? "flex" : "hidden"} fixed right-8 top-1/2 z-50 -translate-y-1/2 flex-col items-end gap-4`}
        >
          <FloatButton
            onClick={() =>
              profileRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            title="Profile"
          >
            {position >= 0 && position < 900 ? (
              <UserCircleSolid className="size-12 rounded-full bg-type-fire-normal p-2 text-white" />
            ) : (
              <UserCircleIcon className="size-12 rounded-full bg-type-fire-normal p-2 text-white" />
            )}
          </FloatButton>

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
        </div>
        {position >= 200 && (
          <button
            onClick={() => window.scrollTo({ top: 200, behavior: "smooth" })}
            className="fixed bottom-8 right-8 rounded-full border border-type-fire-normal bg-white"
          >
            <ArrowUpIcon className="size-12 stroke-2 p-2 text-type-fire-normal" />
          </button>
        )}
      </nav>

      <div className="mt-16 sm:mb-20 sm:mt-40">
        <h2 ref={profileRef} className="text-3xl font-medium">
          I'm,
        </h2>
        <h1 className="my-2 text-5xl font-medium text-type-fire-normal">
          Adoolwit Bootpo
        </h1>

        <ResumeButton />

        <p className="text-xl">
          A self-taught web developer, passionate in data and coding. Some of my{" "}
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
    </section>
  );
};

export default Home;
