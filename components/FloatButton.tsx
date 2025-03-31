import React from "react";

import {
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon as ArrowTopRightOnSquareSolid,
  BriefcaseIcon as BriefcaseSolid,
  UserIcon as UserSolid,
} from "@heroicons/react/24/solid";

interface FloatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const FloatButton = ({ title, children, ...rest }: FloatButtonProps) => {
  return (
    <button
      {...rest}
      className="group/project relative h-12 w-12 rounded-full bg-type-fire-normal transition-all duration-300 hover:w-32"
    >
      {children}
      <p className="invisible absolute top-1/2 -translate-y-1/2 translate-x-14 font-medium text-white opacity-0 group-hover/project:visible group-hover/project:opacity-100">
        {title}
      </p>
    </button>
  );
};

export default FloatButton;
