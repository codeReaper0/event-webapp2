import { TimelineCardProps } from "@/@types/index";
import Image from "next/image";
import React from "react";
import { GroupRectangleSVG, NextBtnSVG } from "./layout/TimelineEvents";

const TimeLineEventCard = ({
  bg,
  imgSrc,
  name,
  date,
  time,
  stadium,
}: TimelineCardProps) => {
  return (
    <div className={`py-6 px-4 rounded-2xl ${bg}`}>
      <Image src={imgSrc} className="w-full" alt="" />
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-sans text-xl font-bold text-[#3F3849]">{name}</h2>
          <h6 className="mt-3">{date}</h6>
          <p className="mt-3 opacity-70">{time}</p>
          <p className="mt-3 font-normal">{stadium}</p>
        </span>
        <button className="z-10 active:scale-[0.95]">
          <NextBtnSVG />
        </button>
        <div className="absolute top-[-25px] right-[-16px]">
          <GroupRectangleSVG />
        </div>
      </div>
    </div>
  );
};

export default TimeLineEventCard;
