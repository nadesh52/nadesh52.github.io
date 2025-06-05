import React from "react";

interface FloatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const FloatButton = ({ title, children, ...rest }: FloatButtonProps) => {
  return (
    <button
      {...rest}
      className="group/project relative h-12 w-12 overflow-hidden rounded-full bg-white transition-all duration-300 hover:w-32"
    >
      {children}
      <p className="invisible absolute top-1/2 -translate-y-1/2 translate-x-14 font-medium tracking-wider opacity-0 delay-0 group-hover/project:visible group-hover/project:opacity-100">
        {title}
      </p>
    </button>
  );
};

export default FloatButton;
