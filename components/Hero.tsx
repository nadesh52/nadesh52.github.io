"use client";
import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ profileRef }: any) {
  return (
    <div ref={profileRef} className="h-[369px]x w-full">
      <Image
        src="/assets/images/name_hero.png"
        width={1440}
        height={220}
        alt="name"
        className="pointer-events-none w-full select-none"
      />

      <div className="flex w-full flex-row">
        <Link
          href="./Adoolwit_Resume.pdf"
          target="_blank"
          className="h-[152px]x min-w-[554px]x flex w-full flex-col justify-center bg-black pl-[15%] text-[68px] leading-[70px] text-white underline-offset-4 hover:underline"
        >
          <p className="mx-6">
            <span className="">DOWNLOAD RESUME</span>
            <span>
              <CursorArrowRaysIcon className="ml-4 inline size-20" />
            </span>
          </p>
        </Link>
        <div className="min-w-[886px]x flex w-full items-center border-y-4 border-black bg-pink pr-[15%] text-right">
          <p className="mx-6 text-[42px] leading-[48px]">
            A self-taught{" "}
            <span className="underline underline-offset-4">web developer</span>,
            Thailand-based. Passionate in data and coding
          </p>
        </div>
      </div>
    </div>
  );
}
