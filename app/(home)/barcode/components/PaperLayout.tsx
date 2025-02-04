"use client";
import React from "react";
import { usePageSetupContext } from "../contexts/SetupContext";

interface PaperLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PaperLayout = ({ children, className ='', ...rest }: PaperLayoutProps) => {
  const { pageSetup } = usePageSetupContext();

  const updatedPageSetup = {
    ...pageSetup,
    column: `grid-cols-[repeat(${pageSetup.column},_${pageSetup.labelWidth})]`,
    row: `grid-rows-12`,
    labelSpaceX: `gap-x-[${pageSetup.labelSpaceX}]`,
    labelSpaceY: `gap-y-[${pageSetup.labelSpaceY}]`,
    pageMarginX: `px-[${pageSetup.marginX}mm]`,
    pageMarginY: `py-[${pageSetup.marginY}mm]`,
  };

  return (
    <div
      className={`grid ${updatedPageSetup.column} ${updatedPageSetup.row} ${updatedPageSetup.labelHeight} ${updatedPageSetup.labelWidth} ${updatedPageSetup.labelSpaceX} ${updatedPageSetup.labelSpaceY} ${updatedPageSetup.pageMarginX}x ${updatedPageSetup.pageMarginY}x`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PaperLayout;
