import React, { forwardRef } from "react";
import DemoButton from "./DemoButton";
import SourceButton from "./SourceButton";
import Link from "next/link";

const appItems = [
  {
    name: "ValueCheck",
    description:
      "My very first idea before learning computer language. A quick and simple comparison which is the best value of items.",
    demo: "/comparison",
    sourceCode: "",
    image: "",
  },
  {
    name: "Interest Calculator",
    description: "",
    demo: "/interest",
    sourceCode: "",
    image: "",
  },
  {
    name: "Pokedex - Pokemon Cyclopedia",
    description: (
      <p>
        Learned Javascript fetch/promises technique. Practice a Responsive
        layout with UI design. All API data from{" "}
        <Link
          href="https://pokeapi.co/"
          className="font-medium text-type-fire-normal"
        >
          {" "}
          pokeapi.co
        </Link>
        .
      </p>
    ),
    demo: "/pokedex",
    sourceCode: "",
    image: "",
  },
  {
    name: "Fair Share - Sharing the bill",
    description:
      "Correct your group orders which who suppose to pay what they consume. Built base on mobile friendly.",
    demo: "/share-bill",
    sourceCode: "",
    image: "",
  },
  {
    name: "Label Generator for Barcode",
    description: "A free label generator for general template sticker paper",
    demo: "/barcode",
    sourceCode: "",
    image: "",
  },
];

const ProjectList = forwardRef<HTMLHeadingElement>(({}, ref) => {
  return (
    <div className="mt-[93px] flex flex-col items-center">
      <h2 ref={ref} className="text-3xl font-medium">
        Selected Projects
      </h2>
      <ul className="mt-[93px] flex w-full flex-col gap-16">
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
    <div className="flex h-[350px] items-center overflow-hidden rounded-md border border-slate-100 bg-white shadow-lg shadow-zinc-200">
      <div className="relative h-full w-3/5 overflow-hidden">
        <div
          className={`h-full w-full bg-[url('/assets/thumbnails/pokedex.png')] bg-cover`}
        ></div>
      </div>

      <div className="flex h-full w-full flex-col justify-between gap-8 p-8">
        <p className="text-3xl font-medium">{name}</p>
        <div className="text-lg">{description}</div>
        <div className="mt-4 flex gap-4">
          <DemoButton url={demo} />
          <SourceButton url={sourceCode} />
        </div>
      </div>
    </div>
  );
};
ProjectList.displayName = 'ProjectList';

export default ProjectList;
