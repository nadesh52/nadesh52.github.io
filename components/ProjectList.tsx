import React, { forwardRef } from "react";
import DemoButton from "./DemoButton";
import SourceButton from "./SourceButton";
import Link from "next/link";
import Image from "next/image";

const appItems = [
  {
    name: "Calculator Apps",
    description: (
      <span>
        The very first idea that inspire to learn programming language. There
        are Comparison App, Interest Calculator, Bill Sharing App.
      </span>
    ),

    demo: "https://nadesh52.github.io/calculator-app",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(home)/comparison",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-[350px] w-auto object-cover object-left sm:w-[430px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
        />
      </svg>
    ),
  },
  {
    name: "Pokedex - Pokemon Cyclopedia",
    description: (
      <span>
        A Responsive landing page. javascript fetch/promises technique practice.
        All API data from{" "}
        <span className="font-medium text-type-fire-normal hover:underline">
          <Link href="https://pokeapi.co/">pokeapi.co</Link>
        </span>
        .
      </span>
    ),
    demo: "/pokedex",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(pokemon)",
    image: (
      <Image
        src="/assets/thumbnails/p3.png"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] w-auto object-cover object-left sm:w-[430px]"
      />
    ),
  },
  {
    name: "Ragnarok Landverse Marketplace (Clone)",
    description: (
      <span>
        A clone responsive design from realworld website. The original website
        is:
        <span className="font-medium text-type-fire-normal hover:underline">
          <Link href="https://apps.maxion.gg/roverse-th">
            apps.maxion.gg/roverse-th
          </Link>
        </span>
        .
      </span>
    ),
    demo: "/ro-market",
    sourceCode: "https://github.com/nadesh52/ro-market",
    image: (
      <Image
        src="/assets/thumbnails/ro-market.jpg"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] w-auto object-cover object-left sm:w-[430px]"
      />
    ),
  },
  {
    name: "Online shopping fee calculator",
    description: (
      <span>
        Calculator for seller to calculate fee and profit from each platform
        before selling.
      </span>
    ),
    demo: "/how-to-price/shopee",
    sourceCode: "https://github.com/nadesh52/how-to-price",
    image: (
      <Image
        src="/assets/thumbnails/price.png"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] w-auto object-cover object-left sm:w-[430px]"
      />
    ),
  },
];

const ProjectList = forwardRef<HTMLHeadingElement>(({}, ref) => {
  return (
    <div className="mt-[40px] sm:mt-[80px]">
      <h3 ref={ref} className="text-center text-3xl font-medium">
        Selected Projects
      </h3>
      <ul className="mt-[40px] flex flex-col space-y-10 sm:mt-[80px] sm:space-y-20">
        {appItems.map((item, index) => (
          <li key={index}>
            <ProjectCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export const ProjectCard = ({ item }: any) => {
  const { name, description, demo, sourceCode, image } = item;

  return (
    <div className="mx-auto flex h-[450px] w-full flex-col items-center overflow-hidden rounded-xl bg-white shadow-md sm:flex-row md:mx-0 md:h-[350px]">
      <div className="relative h-[430px] min-w-[430px] overflow-hidden shadow-lg sm:h-full">
        {image}
      </div>

      <div className="flex h-full w-full flex-col justify-between p-6">
        <div>
          <h4 className="mb-2 text-xl font-medium sm:mb-4 sm:text-3xl md:mb-10">
            {name}
          </h4>
          <p className="text-md sm:text-lg">{description}</p>
        </div>
        <div className="mt-4 flex flex-row gap-2 sm:gap-4">
          <DemoButton url={demo} />
          <SourceButton url={sourceCode} />
        </div>
      </div>
    </div>
  );
};
ProjectList.displayName = "ProjectList";

export default ProjectList;
