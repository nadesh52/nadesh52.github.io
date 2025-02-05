import Link from "next/link";
import React, { forwardRef } from "react";

const Contact = forwardRef<HTMLHeadElement | any>((props, ref) => {
  return (
    <div className="mt-[40px] sm:mt-[80px] text-center">
      <h3 ref={ref} className="text-3xl font-medium">
        Contact
      </h3>

      <div className="mt-[20px] mb-[40px] sm:my-[80px] flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
        <div>
          <Link
            href="mailto:adoolwit.bootpo@gmail.com"
            className="hover:text-type-fire-normal"
          >
            adoolwit.bootpo@gmail.com
          </Link>
        </div>
        <div className="hidden sm:block">|</div>
        <div>
          <Link
            href="https://www.linkedin.com/in/adoolwit-bootpo-551b371a9/"
            target="_blank"
            className="hover:text-type-fire-normal"
          >
            LinkedIn
          </Link>
        </div>
        <div className="hidden sm:block">|</div>
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
      <p>nadesh52</p>
    </div>
  );
});
Contact.displayName = "Contact";

export default Contact;
