import Link from "next/link";
import React, { forwardRef } from "react";

const Contact = forwardRef<HTMLHeadElement | any>((props, ref) => {
  return (
    <div className="mt-[93px] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 ref={ref} className="text-3xl font-medium">
          Contact
        </h2>

        <div className="mt-[93px] flex w-full items-center justify-center gap-4 text-lg font-medium">
          <div>
            <Link
              href="mailto:adoolwit.bootpo@gmail.com"
              className="hover:text-type-fire-normal"
            >
              adoolwit.bootpo@gmail.com
            </Link>
          </div>
          <div>|</div>
          <div>
            <Link
              href="https://www.linkedin.com/in/adoolwit-bootpo-551b371a9/"
              target="_blank"
              className="hover:text-type-fire-normal"
            >
              LinkedIn
            </Link>
          </div>
          <div>|</div>
          <div>
            <Link
              href="https://github.com/nadesh52"
              target="_blank"
              className="hover:text-type-fire-normal"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="mb-10 mt-[93px]">nadesh52</div>
      </div>
    </div>
  );
});
Contact.displayName ='Contact';

export default Contact;
