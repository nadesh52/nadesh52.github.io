import React, { forwardRef } from "react";
import DemoButton from "./DemoButton";
import SourceButton from "./SourceButton";
import Link from "next/link";
import Image from "next/image";

const appItems = [
  {
    name: "Comparison Value",
    description: (
      <span>
        The very first idea that inspire to learn programming language. A quick
        and simple comparison to find best value of items.
      </span>
    ),

    demo: "/comparison",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(home)/comparison",
    image: (
      <Image
        src="/assets/thumbnails/p1.png"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] sm:w-[430px] w-auto object-cover object-left"
      />
    ),
  },
  {
    name: "Interest Calculator",
    description: (
      <span>
        First full function app. Can calculate both saving and fixed plan.
      </span>
    ),
    demo: "/interest",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(home)/interest",
    image: (
      <Image
        src="/assets/thumbnails/p2.png"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] sm:w-[430px] w-auto object-cover object-left"
      />
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
        className="h-[350px] sm:w-[430px] w-auto object-cover object-left"
      />
    ),
  },
  {
    name: "Fair Share - Sharing the bill",
    description: (
      <span>
        Correct user orders which who suppose to pay what they eat or drink. A
        mobile-first practice.
      </span>
    ),
    demo: "/share-bill",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(home)/share-bill",
    image: (
      <Image
        src="/assets/thumbnails/p4.png"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] sm:w-[430px] w-auto object-cover object-left"
      />
    ),
  },
  {
    name: "Label Generator for Barcode",
    description: "A free label generator for general template sticker paper",
    demo: "/barcode",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(home)/barcode",
    image: (
      <Image
        src="/assets/thumbnails/p5.png"
        width={430}
        height={350}
        alt="tmb"
        className="h-[350px] sm:w-[430px] w-auto object-cover object-left"
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
    <div className="flex h-[450px] md:h-[350px] mx-auto md:mx-0 w-full flex-col items-center overflow-hidden rounded-xl bg-white shadow-md sm:flex-row">
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
        <div className="flex flex-row gap-2 mt-4 sm:gap-4">
          <DemoButton url={demo} />
          <SourceButton url={sourceCode} />
        </div>
      </div>
    </div>
  );
};
ProjectList.displayName = "ProjectList";

export default ProjectList;
