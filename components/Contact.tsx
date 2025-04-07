import React from "react";
import Link from "next/link";

export default function Contact({ contactRef }: any) {
  return (
    <section
      ref={contactRef}
      className="flex h-[320px] flex-col items-center justify-center gap-10 bg-red"
    >
      <h3 className="text-stroke my-2 text-[64px] font-medium leading-[72px] drop-shadow-[0px_10px_0px_black]">
        Contact
      </h3>

      <div className="flex flex-row items-center gap-4 text-5xl">
        <div>
          <Link
            href="mailto:adoolwit.bootpo@gmail.com"
            className="hover:text-white hover:underline hover:underline-offset-4"
          >
            adoolwit.bootpo@gmail.com
          </Link>
        </div>
        <div>//</div>
        <div>
          <Link
            href="https://www.linkedin.com/in/adoolwit-bootpo-551b371a9/"
            target="_blank"
            className="hover:text-white hover:underline hover:underline-offset-4"
          >
            LinkedIn
          </Link>
        </div>
        <div>//</div>
        <div>
          <Link
            href="https://github.com/nadesh52"
            target="_blank"
            className="hover:text-white hover:underline hover:underline-offset-4"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
