"use client";
import React from "react";

export default function Header({ projectsRef, contactRef }: any) {
  return (
    <nav className="w-full border-b-4 border-black bg-white">
      <div className="flex h-[72px] w-full flex-row items-center">
        <button
          onClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="h-full w-full border-r-2 border-black px-6 text-4xl hover:bg-black hover:text-white hover:underline"
        >
          PROJECTS
        </button>
        <button
          onClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="h-full w-full border-l-2 border-black px-6 text-4xl hover:bg-black hover:text-white hover:underline"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}
