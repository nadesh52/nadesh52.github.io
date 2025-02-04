import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
  return (
    <div className="my-8 flex w-fit items-center gap-2 hover:text-type-fire-normal">
      <DocumentTextIcon className="size-6" />
      <Link href="./hong52.pdf" target="_blank" className="font-mono text-lg">
        Resume PDF
      </Link>
    </div>
  );
};

export default ResumeButton;
