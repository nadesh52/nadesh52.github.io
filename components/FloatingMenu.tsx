"use client";
import React, { useEffect, useState } from "react";
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
import FloatButton from "./FloatButton";

export default function FloatingMenu({
  profileRef,
  projectsRef,
  contactRef,
}: any) {
  const [position, setPosition] = useState<any>();

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
    <nav
      className={`${position >= 200 ? "flex" : "hidden"} fixed bottom-8 right-8 z-50 flex-col items-end gap-4`}
    >
      <FloatButton
        onClick={() =>
          profileRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        title="Intro"
      >
        {position >= 0 && position < 900 ? (
          <UserCircleSolid className="floating-btn" />
        ) : (
          <UserCircleIcon className="floating-btn" />
        )}
      </FloatButton>

      <FloatButton
        onClick={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        title="Projects"
      >
        {position >= 900 && position < 2380 ? (
          <BriefcaseSolid className="floating-btn" />
        ) : (
          <BriefcaseIcon className="floating-btn" />
        )}
      </FloatButton>

      <FloatButton
        onClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        title="Contact"
      >
        {position >= 2380 ? (
          <UserSolid className="floating-btn" />
        ) : (
          <UserIcon className="floating-btn" />
        )}
      </FloatButton>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="rounded-full mt-12 bg-white"
      >
        <ArrowUpIcon className="size-12 p-2" />
      </button>
    </nav>
  );
}
