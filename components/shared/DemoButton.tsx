import Link from "next/link";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const DemoButton = ({ url }: any) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-yellow flex w-fit justify-between text-2xl items-center gap-2 rounded-lg border-4 border-black px-3 py-2 font-medium text-black drop-shadow-[4px_4px_0px_black]"
    >
      <p>DEMO</p>
      <ArrowTopRightOnSquareIcon className="size-6 stroke-2" />
    </Link>
  );
};

export default DemoButton;
