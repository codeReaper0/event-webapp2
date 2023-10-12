import TimelineCard from "./TimelineEvents";
import Rectangle31 from "../../public/Rectangle31.png";
import Rectangle32 from "../../public/Rectangle32.png";
import createEvent from "../../public/create-new-event.svg";
import Image from "next/image";
import Link from "next/link";

const ArrowDownSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17 10L12 15L7 10"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextBtnSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    viewBox="0 0 32 33"
    fill="none"
  >
    <rect y={0.5} width={32} height={32} rx={8.16761} fill="#3F3849" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.975 11.2614C16.1816 11.0524 16.4617 10.9351 16.7537 10.9351C17.0458 10.9351 17.3259 11.0524 17.5325 11.2614L21.9384 15.7191C22.1448 15.9281 22.2608 16.2115 22.2608 16.507C22.2608 16.8025 22.1448 17.0859 21.9384 17.2949L17.5325 21.7527C17.3247 21.9557 17.0465 22.068 16.7577 22.0655C16.4689 22.0629 16.1926 21.9457 15.9884 21.7391C15.7842 21.5325 15.6684 21.2529 15.6658 20.9607C15.6633 20.6685 15.7744 20.387 15.975 20.1768L18.5007 17.6214H10.1449C9.8528 17.6214 9.57264 17.504 9.36607 17.295C9.1595 17.086 9.04346 16.8026 9.04346 16.507C9.04346 16.2114 9.1595 15.928 9.36607 15.719C9.57264 15.51 9.8528 15.3926 10.1449 15.3926H18.5007L15.975 12.8372C15.7685 12.6282 15.6525 12.3448 15.6525 12.0493C15.6525 11.7537 15.7685 11.4703 15.975 11.2614Z"
      fill="#FFC6BC"
    />
  </svg>
);
const GroupRectangleSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85}
    height={129}
    viewBox="0 0 85 129"
    fill="none"
  >
    <rect
      x={35.5125}
      y={24.5854}
      width={73.7565}
      height={103.806}
      fill="url(#paint0_linear_6_5074)"
    />
    <rect width={73.7565} height={103.806} fill="url(#paint1_linear_6_5074)" />
    <defs>
      <linearGradient
        id="paint0_linear_6_5074"
        x1={72.3907}
        y1={32.0977}
        x2={72.3907}
        y2={188.865}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={1} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_6_5074"
        x1={36.8783}
        y1={30.049}
        x2={36.8783}
        y2={161.097}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={1} stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

interface TimelinePitchItem {
  bg: string;
  imgSrc: any;
  name: string;
  date: string;
  time: string;
  stadium: string;
}

const pitchArray: TimelinePitchItem[] = [
  {
    bg: "bg-[#EEE0FF]",
    imgSrc: Rectangle31,
    name: "Football Game",
    date: "20th May, 2023",
    time: "Friday, 16:00-18:00",
    stadium: "Teslim Balogun Stadium",
  },
  {
    bg: "bg-[#D2F5FE]",
    imgSrc: Rectangle32,
    name: "Football Game",
    date: "20th May, 2023",
    time: "Friday, 16:00-18:00",
    stadium: "Teslim Balogun Stadium",
  },
  {
    bg: "bg-[#FFE0C4]",
    imgSrc: Rectangle31,
    name: "Football Game",
    date: "20th May, 2023",
    time: "Friday, 16:00-18:00",
    stadium: "Teslim Balogun Stadium",
  },
  {
    bg: "bg-[#FFC6BC]",
    imgSrc: Rectangle31,
    name: "Football Game",
    date: "20th May, 2023",
    time: "Friday, 16:00-18:00",
    stadium: "Teslim Balogun Stadium",
  },
  {
    bg: "bg-[#EEE0FF]",
    imgSrc: Rectangle32,
    name: "Football Game",
    date: "20th May, 2023",
    time: "Friday, 16:00-18:00",
    stadium: "Teslim Balogun Stadium",
  },
  {
    bg: "bg-[#FFE0C4]",
    imgSrc: Rectangle32,
    name: "Football Game",
    date: "20th May, 2023",
    time: "Friday, 16:00-18:00",
    stadium: "Teslim Balogun Stadium",
  },
];

const MyTimeline: React.FC = () => {
  return (
    <div className="w-full my-8 pb-8 font-inter ">
      {/* Discover and Create */}
      <div className="px-4 md:px-0">
        <div className="relative bg-[url('/Rectangle27.png')] overflow-hidden object-contain rounded-lg bg-cover bg-center min-h-[300px] flex items-center gap-y-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3F3849] via-[rgba(63, 56, 73, 0.83)] to-[rgba(63, 56, 73, 0.00)] z-0"></div>
          <div className="pl-2 md:pl-8 ">
            <div className="max-w-[420px] w-full font-sans relative z-10 ">
              <h1 className="text-white font-bold text-3xl leading-10 mb-4">
                Discover and Create Memorable Events
              </h1>
              <p className="text-[#FFFFFF80] text-base font-medium">
                Craft events that reflect your passions and interests.
              </p>
              <Link href="/timeline/create-events">
                <button className="mt-8 flex gap-2 items-center py-3 px-4 text-black bg-[#FFC6BC] rounded-2xl font-sans font-medium active:bg-[#fadfc8] active:scale-[0.98]">
                  <Image
                    src={createEvent}
                    alt="create-event"
                    className="w-5 h-5"
                  />
                  Create An Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Card Section */}
      <TimelineCard />
    </div>
  );
};

export default MyTimeline;
