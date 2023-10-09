import { ArrowButtonIcon } from "@/public/assets/icon/arrowButtonIcon";
import { RightArrowIcon } from "@/public/assets/icon/rightArrowIcon";
import Image from "next/image";
import rectangles from "assets/images/rectangles.png";
import FootballImage from "assets/images/football.png";
import PitchImage from "assets/techiesgroup/pitch.png";
import PeopleImage from "assets/techiesgroup/people.png";
import { CommentIcon } from "@/public/assets/icon/commentIcon";

export default function EventCard() {
  const colors = [
    "bg-brand-purple-300",
    "bg-brand-blue-300",
    "bg-brand-pink-500",
    "bg-brand-pink-400",
  ];
  let randomColor = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomColor];

  return (
    <div className="w-full min-w-[400px] md:min-w-[320px] min-[980px]:min-w-0 min-[1230px]:max-w-[300px] font-sans overflow-hidden">
      <div
        className={`${bgColor} px-4 py-4 md:pt-6 md:pb-3 rounded-t-2xl text-base border border-b-0 border-black md:border-none`}
      >
        <div className="gap-3 flex items-center md:items-start md:flex-col">
          <div className="w-[100px] h-[100px] md:w-full md:h-[140px] relative z-10">
            <Image
              src={FootballImage}
              alt="Football"
              width={270}
              height={160}
              className="md:hidden object-cover w-full h-full rounded-full md:rounded-2xl"
            />
            <Image
              src={PitchImage}
              alt="Football Pitch"
              width={270}
              height={160}
              className="hidden md:block object-cover w-full h-full rounded-full md:rounded-2xl"
            />
          </div>
          <div className="relative flex justify-between max-md:flex-1 w-full">
            <div className="space-y-1">
              <div className="font-bold font-sans md:font-monserrat text-2xl md:text-xl tracking-[0.2px] md:text-primary">
                Football Game
              </div>
              <div className="font-medium md:hidden">May 20, 2023</div>
              <div className="font-medium hidden md:block">20th May, 2023</div>
              <div className="font-bold text-sm md:text-base md:font-medium opacity-70 md:hidden">
                Friday, 4 - 6 PM
              </div>
              <div className="font-medium md:opacity-70 hidden md:block">
                Friday, 16:00-18:00
              </div>
              <div className="font-medium md:font-normal md:opacity-80">
                Teslim Balogun Stadium
              </div>
            </div>
            <div className="flex items-end md:items-center">
              <button className="relative z-10 hover:scale-90 transition-all duration-200">
                <ArrowButtonIcon />
              </button>
            </div>
            <div className="absolute bottom-2 -right-3 md:bottom- md:-right-6 md:-top-16">
              <Image
                src={rectangles}
                alt="rectangles"
                width={100}
                height={100}
                className="max-md:w-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${bgColor} max-md:text-center max-md:bg-white px-4 py-2 md:pb-6 border border-black md:border-none`}
      >
        <a
          href="#"
          className="underline text-primary font-bold text-lg font-monserrat"
        >
          I will join
        </a>
      </div>
      <a
        href="#"
        className="rounded-b-2xl bg-primary p-4 px-6 text-white text-base md:text-sm flex items-center justify-between hover:bg-primary/80 transition-colors ease-in-out duration-150  border border-black md:border-none border-t-0 md:pl-4"
      >
        <div className="md:hidden flex items-center gap-3">
          <CommentIcon />
          <span>Leave a comment</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="flex">
            <Image
              width={66}
              height={24}
              src={PeopleImage}
              alt="avatars"
              className="rounded-full"
            />
          </div>
          <span>11 Comments</span>
        </div>
        <RightArrowIcon />
      </a>
    </div>
  );
}
