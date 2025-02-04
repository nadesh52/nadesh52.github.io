import React, { forwardRef } from "react";
import { usePageSetupContext } from "../contexts/SetupContext";

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Label = forwardRef<any, LabelProps>(
  ({ children, className = "", ...props }, ref) => {
    const { pageSetup } = usePageSetupContext();

    const updatedPageSetup = {
      ...pageSetup,
      labelHeight: `min-h-[${pageSetup.labelHeight}]`,
      labelWidth: `min-w-[${pageSetup.labelWidth}]`,
    };

    return (
      <div
        ref={ref}
        className={`${updatedPageSetup.labelHeight} ${updatedPageSetup.labelWidth} place-content-center place-items-center rounded-md border border-dashed border-gray-400 text-center ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Label.displayName ='Label';

export default Label;
