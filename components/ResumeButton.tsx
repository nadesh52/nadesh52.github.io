import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
  return (
    <Link
      className="my-8 flex w-fit items-center gap-2 font-mono text-lg hover:underline underline-offset-2 hover:text-type-fire-normal"
      href="./Adoolwit_Resume.pdf"
      target="_blank"
    >
      <DocumentTextIcon className="size-6" />
      Resume PDF
    </Link>
  );
};

export default ResumeButton;
