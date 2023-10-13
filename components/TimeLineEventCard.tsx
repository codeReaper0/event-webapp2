import { TimelineCardProps } from "@/@types/index";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rectangle31 from '../public/Rectangle31.png'
import Rectangle32 from '../public/Rectangle32.png'
import { GroupRectangleSVG, NextBtnSVG } from "./layout/TimelineEvents";

const TimeLineEventCard = ({
  id,
  bg,
  image,
  event_name,
  event_end,
  event_start,
  date,
  time,
  stadium,
  updated_at,
  created_at,
  event_description,
  location,
}: TimelineCardProps) => {
  const [renderBg, setRenderBg] = useState<string>('')
  const [renderBgImg, setRenderBgImg] = useState<any>()
  const convertDate = (date: string) => new Date(date)

  const dynamicBg = () => {
    const colors = ["bg-[#EEE0FF]", "bg-[#FFC6BC]", "bg-[#FFE0C4]", "bg-[#D2F5FE]"];
    const randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
  }
  const dynamicImg = () => {
    const imgs = [Rectangle31, Rectangle32];
    const randomNum = Math.floor(Math.random() * imgs.length);
    return imgs[randomNum];
  }

  useEffect(() => {
    setRenderBg(dynamicBg())
    setRenderBgImg(dynamicImg())
  }, [])

  return (
    <div className={`py-6 px-4 rounded-2xl ${renderBg}`}>
      <Image src={image || renderBgImg} width={100} height={100} className="w-full" alt="" />
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-sans text-xl font-bold text-[#3F3849]">{event_name}</h2>
          <h6 className="mt-3">{convertDate(event_start).toDateString()}</h6>
          <p className="mt-3 opacity-70">{convertDate(created_at).toDateString()}</p>
          <p className="mt-3 font-normal capitalize">{location || 'Unlnown Location'}</p>
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
