import Image from "next/image";
import { GroupRectangleSVG } from "./layout/TimelineCard";
import TechiesImage from "assets/mypeople/people1.png";
import YBNLImage from "assets/mypeople/people2.png";
import Link from "next/link";

interface cardItem {
  bg: string;
  imgSrc: any;
  name: string;
  events: number;
}

const cardArray: cardItem[] = [
  {
    bg: "bg-[#FFC6BC]",
    imgSrc: TechiesImage,
    name: "Techies 💻🎶",
    events: 16,
  },
  {
    bg: "bg-[#EEE0FF]",
    imgSrc: YBNLImage,
    name: "YBNL Mafia 🎶",
    events: 12,
  },
  {
    bg: "bg-[#FFE0C4]",
    imgSrc: TechiesImage,
    name: "Techies 💻🎶",
    events: 5,
  },
];

const MyPeopleCard: React.FC = () => {
  const cardData = cardArray.map((item, index) => (
    <Link
      href="people-details"
      key={index}
      className={`py-3 px-2 sm:py-6 sm:px-4 flex flex-col rounded-2xl ${item.bg} overflow-hidden`}
    >
      <Image src={item.imgSrc} className="w-full order-last md:order-first" alt="" />
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-montserrat text-lg sm:text-xl font-bold text-[#3F3849]">
            {item.name}
          </h2>
          <h6 className="mt-3 text-sm sm:text-base">{item.events} events</h6>
        </span>
        <div className="absolute top-[-82px] sm:top-[-32px] right-[-16px]">
          <GroupRectangleSVG />
        </div>
      </div>
    </Link>
  ));

  return (
    /* My People Card Container */
    <div className="p-6 md:bg-secondary rounded-2xl">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">{cardData}</div>
    </div>
  );
};

export default MyPeopleCard;
