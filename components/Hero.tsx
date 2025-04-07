"use client";
import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Hero({ profileRef }: any) {
  return (
    <div ref={profileRef} className="h-[600px] w-full">
      <div className="flex h-[440px] items-center justify-center bg-hero bg-cover bg-center">
        <h1 className="text-stroke my-2 text-[128px] font-medium leading-[166px] drop-shadow-[0px_10px_0px_black]">
          ADOOLWIT BOOTPO
        </h1>
      </div>

      <div className="h-[160px] border-y-4 border-black">
        <div className="flex w-full flex-row">
          <Link
            href="./Adoolwit_Resume.pdf"
            target="_blank"
            className="flex h-[152px] w-full min-w-[554px] flex-col justify-center bg-black pl-[15%] text-[68px] leading-[70px] text-white underline-offset-4 hover:underline"
          >
            <p>
              <span className="">DOWNLOAD RESUME</span>
              <span>
                <CursorArrowRaysIcon className="ml-4 inline size-20" />
              </span>
            </p>
          </Link>
          <div className="flex w-full min-w-[886px] items-center bg-pink pr-[15%] text-right">
            <p className="text-[45px] leading-[54px]">
              A self-taught{" "}
              <span className="underline underline-offset-4">
                web developer
              </span>
              , passionate in data and coding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
