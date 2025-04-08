"use client";
import React from "react";
import { techList } from "@/constants";

export default function TechList() {
  return (
    <section className="w-full bg-blue">
      <div className="px-[15%] py-10">
        <div className="mb-14 w-fit rounded-2xl border-4 border-black bg-white px-4 py-2 drop-shadow-[8px_8px_0px_black]">
          <h4 className="text-[64px] leading-[64px]">Skills&Techs</h4>
        </div>

        <div className="w-full rounded-b-md duration-300">
          <div className="grid grid-cols-[repeat(5,auto)] justify-between gap-y-10">
            {techList.map((item: any) => (
              <div
                key={item.id}
                className="flex h-[170px] w-[130px] flex-col items-center justify-between rounded-lg border-4 border-black bg-white p-2 drop-shadow-[8px_8px_0px_black]"
              >
                <div>{item.image}</div>
                <h3 className="text-lg tracking-widest">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
