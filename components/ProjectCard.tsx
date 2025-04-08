"use client";
import React from "react";
import DemoButton from "./shared/DemoButton";
import SourceButton from "./shared/SourceButton";

const ProjectCard = ({ items }: any) => {
  const { name, description, demo, sourceCode, image } = items;

  return (
    <div className="group aspect-square h-full w-full overflow-hidden">
      <div className="preserve-3d group-hover:rotate-y-180 relative transition-all delay-75 duration-200 group-hover:delay-0">
        {/* FRONT CARD */}
        <div className="absolute w-full aspect-square overflow-hidden [backface-visibility:hidden]">
          {image}
        </div>

        {/* BACK CARD */}
        <div className="rotate-y-180 absolute z-[2] flex aspect-square w-full flex-col items-center justify-between overflow-hidden bg-green p-8 [backface-visibility:hidden]">
          <h4 className="text-center text-5xl font-medium">{name}</h4>
          <p>{description}</p>
          <div className="flex flex-row items-center gap-4">
            <DemoButton url={demo} />
            <SourceButton url={sourceCode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
