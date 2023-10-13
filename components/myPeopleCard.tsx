import Image from "next/image";
// import TechiesImage from "assets/mypeople/people1.png";
// import YBNLImage from "assets/mypeople/people2.png";
import Link from "next/link";
import { MyPeopleProps } from "@/@types";
import { GroupRectangleSVG } from "./layout/TimelineEvents";

const MyPeopleCard = ({ bgColor, imgSrc, name, events }: MyPeopleProps) => {
  return (
    <Link
      href="people-details"
      className={`py-3 px-2 sm:py-6 sm:px-4 flex flex-col rounded-2xl ${bgColor} overflow-hidden`}
    >
      <Image src={imgSrc} className="w-full order-last md:order-first" alt="" />
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-montserrat text-lg sm:text-xl font-bold text-[#3F3849]">
            {name}
          </h2>
          <h6 className="mt-3 text-sm sm:text-base">{events} events</h6>
        </span>
        <div className="absolute top-[-82px] sm:top-[-32px] right-[-16px]">
          <GroupRectangleSVG />
        </div>
      </div>
    </Link>
  );
};

export default MyPeopleCard;
