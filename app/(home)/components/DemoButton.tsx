import Link from "next/link";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const DemoButton = ({ url }: any) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex w-fit gap-2 rounded-md bg-type-fire-normal px-4 py-2 font-medium text-white hover:bg-type-fire-light"
    >
      <p>Live Demo</p>
      <div>
        <ArrowTopRightOnSquareIcon className="size-6" />
      </div>
    </Link>
  );
};

export default DemoButton;
