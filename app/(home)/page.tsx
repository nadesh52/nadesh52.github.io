"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  ArrowUpIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon as ArrowTopRightOnSquareSolid,
  BriefcaseIcon as BriefcaseSolid,
  UserIcon as UserSolid,
} from "@heroicons/react/24/solid";
import TechList from "./components/TechList";
import Contact from "./components/Contact";
import FloatButton from "./components/FloatButton";

const appItems = [
  {
    name: "Price Compare",
    url: "/comparison-app",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
        />
      </>
    ),
  },
  {
    name: "Interest Calculator",
    url: "/interest-calc",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </>
    ),
  },
  {
    name: "Pokedex",
    url: "/pokedex",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </>
    ),
  },
  // {
  //   name: "Credit Check",
  //   url: "/credit-app",
  //   icon: (
  //     <>
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
  //       />
  //     </>
  //   ),
  // },
  {
    name: "Fair Share - Sharing the bill",
    url: "/share-bill",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </>
    ),
  },
  {
    name: "Invoice Generator",
    url: "/invoice-generator",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </>
    ),
  },
];

const Home = () => {
  const [position, setPosition] = useState<any>();

  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
      // console.log(window.scrollY)
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setPosition(window.scrollY);
      });
    };
  }, []);

  return (
    <article className="relative w-full bg-slate-100">
      <div className="mx-auto max-w-screen-md">
        <nav className={`flex items-center gap-8 pt-10`}>
          <button
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-lg hover:text-type-fire-normal"
          >
            Projects
          </button>
          <button
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-lg hover:text-type-fire-normal"
          >
            Contact
          </button>
        </nav>

        <nav
          className={`${position >= 300 ? "flex" : "hidden"} fixed right-4 top-[200px] z-50 flex-col items-end gap-4`}
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-type-fire-normal bg-white"
            >
              <ArrowUpIcon className="size-12 stroke-2 p-2 text-type-fire-normal" />
            </button>
          )}
        </nav>

        <div className="mb-44 pt-40">
          <h2 className="text-3xl font-medium">I'm,</h2>
          <h1 className="my-2 text-5xl font-medium text-type-fire-normal">
            Adoolwit Bootpo
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            in numquam ipsum excepturi molestiae accusamus pariatur! At sint
            reprehenderit quibusdam ducimus veniam nisi harum.
          </p>

          <div className="my-4 flex w-fit items-center gap-2 hover:text-type-fire-normal">
            <DocumentTextIcon className="size-6" />
            <Link href="#" className="font-mono text-lg">
              Resume PDF
            </Link>
          </div>

          <div className="my-10 space-y-4">
            <TechList />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 ref={projectsRef} className="my-10 text-3xl font-medium">
            Projects
          </h2>
          <ul className="mt-4 flex w-full flex-col gap-16">
            {appItems.map((item, index) => (
              <li key={index}>
                <div className="flex h-[350px] items-center overflow-hidden rounded-md border border-slate-100 bg-white shadow-lg shadow-zinc-200">
                  <div className="relative h-full w-3/5 overflow-hidden">
                    <div className="h-full w-full bg-[url('/assets/thumbnails/pokedex.png')] bg-cover"></div>
                  </div>

                  <div className="flex h-full w-4/5 flex-col gap-8 px-8 py-12">
                    <p className="text-3xl font-medium">{item.name}</p>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias voluptatibus, dolorum illum id voluptas adipisci
                      repudiandae molestias! Accusamus, commodi dolores.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="w-fit rounded border border-slate-400 p-1 shadow">
                        ReactJs
                      </div>
                      <div className="w-fit rounded border border-slate-400 p-1 shadow">
                        Tailwind CSS
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={item.url}
                        target="_blank"
                        className="flex w-fit gap-2 rounded bg-type-fire-normal px-4 py-2 font-medium text-white hover:bg-type-fire-light"
                      >
                        <p>Live Demo</p>
                        <div>
                          <ArrowTopRightOnSquareIcon className="size-6" />
                        </div>
                      </Link>

                      <a
                        href={item.url}
                        className="group flex w-fit gap-2 rounded border border-slate-100 bg-white px-4 py-2 font-medium text-type-fire-normal shadow-md shadow-slate-400/50 hover:text-type-fire-light hover:shadow-sm"
                      >
                        <p>Source</p>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 30 30"
                            fill="#f5ac78"
                            className="size-6 group-hover:fill-type-fire-light"
                          >
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-44 flex flex-col items-center">
          <Contact ref={contactRef} />
        </div>
      </div>
    </article>
  );
};

export default Home;
