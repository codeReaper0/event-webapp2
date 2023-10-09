import Image from "next/image";
import { GroupRectangleSVG } from "./layout/myTimeline";
import TechiesImage from "assets/mypeople/people1.png";
import YBNLImage from "assets/mypeople/people2.png";

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
    events: 16
  },
  {
    bg: "bg-[#EEE0FF]",
    imgSrc: YBNLImage,
    name: "YBNL Mafia 🎶",
    events: 12
  },
  {
    bg: "bg-[#FFE0C4]",
    imgSrc: TechiesImage,
    name: "Techies 💻🎶",
    events: 5
  },
];

const MyPeopleCard: React.FC = () => {

  const cardData = cardArray.map((item, index) => (
    <div key={index} className={`py-6 px-4 rounded-2xl ${item.bg}`}>
      <Image src={item.imgSrc} className="w-full" alt="" />
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-montserrat text-xl font-bold text-[#3F3849]">
            {item.name}
          </h2>
          <h6 className="mt-3">{item.events} events</h6>
        </span>
        <div className="absolute top-[-52px] right-[-16px]">
          <GroupRectangleSVG />
        </div>
      </div>
    </div>
  ));

  return (
    /* My People Card Container */
    <div className="p-6 bg-secondary rounded-2xl">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cardData}
      </div>
    </div>
  );
};

export default MyPeopleCard;
