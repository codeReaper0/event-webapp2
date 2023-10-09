import { ArrowButtonIcon } from "@/public/assets/icon/arrowButtonIcon";
import { RightArrowIcon } from "@/public/assets/icon/rightArrowIcon";
import Image from "next/image";
import rectangles from "assets/images/rectangles.png";
import PitchImage from "assets/techiesgroup/pitch.png";
import PeopleImage from "assets/techiesgroup/people.png";

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
    <div className="w-full max-w-[280px] md:max-w-[280px] font-sans overflow-hidden">
      <div
        className={`${bgColor} px-4 py-6 rounded-t-2xl text-base space-y-3 border md:border-none`}
      >
        <div className="h-[140px] relative z-10">
          <Image
            src={PitchImage}
            alt="Football Pitch"
            width={270}
            height={160}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="relative flex justify-between">
          <div className="space-y-1">
            <div className="font-bold font-monserrat text-xl tracking-[0.2px] text-primary">
              Football Game
            </div>
            <div className="font-medium">20th May, 2023</div>
            <div className="font-medium opacity-70">Friday, 16:00-18:00</div>
            <div className="font-normal opacity-80">Teslim Balogun Stadium</div>
          </div>
          <div className="flex items-center">
            <button className="relative z-10">
              <ArrowButtonIcon />
            </button>
          </div>
          <div className="absolute -right-6 -top-14">
            <Image src={rectangles} alt="rectangles" width={100} height={100} />
          </div>
        </div>
        <div>
          <a
            href="#"
            className="underline text-primary font-bold text-lg font-monserrat"
          >
            I will join
          </a>
        </div>
      </div>
      <a
        href="#"
        className="rounded-b-2xl bg-primary p-4 pr-6 text-white text-sm flex items-center justify-between hover:bg-primary/80 transition-colors ease-in-out duration-150"
      >
        <div className="flex items-center gap-3">
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
