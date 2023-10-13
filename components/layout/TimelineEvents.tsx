import { useEffect, useRef, useState } from "react";
import caret from "../../public/arrow-down.svg";
import Image from "next/image";
import { TimelineCardProps } from "@/@types/index";
import TimeLineEventCard from "../TimeLineEventCard";

export const ArrowDownSVG: React.FC = () => (
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

export const NextBtnSVG: React.FC = () => (
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

export const GroupRectangleSVG: React.FC = () => (
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

export const LoadingSVG: React.FC = () => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="hds-flight-icon--animation-loading animate-spin mx-auto"
  >
    <g fill="#000000" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
        opacity={0.2}
      />
      <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
    </g>
  </svg>
);

interface dropdownProps {
  text: string;
  value: string;
}

const dropdownItems: dropdownProps[] = [
  {
    text: "All",
    value: "all",
  },
  {
    text: "This month",
    value: "this-month",
  },

  {
    text: "Last month",
    value: "last-month",
  },
  {
    text: "Last year",
    value: "last-year",
  },
];

const TimelineEvents = () => {
  const [evetData, setEventData] = useState<TimelineCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<dropdownProps>(
    dropdownItems[0],
  );
  const [active, setActive] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleItemClick = (item: dropdownProps) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const showDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    fetch(`https://wetindeysup-api.onrender.com/api/events`)
      .then((response) => response.json())
      .then((response: TimelineCardProps[]) => {
        console.log(response);
        setEventData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Fetch Error", err);
        setIsLoading(false);
      });

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const renderCardData = evetData.map((item) => (
    <TimeLineEventCard key={item.id} {...(item as TimelineCardProps)} />
  ));

  return (
    <div className="mx-auto mt-8 p-2 sm:p-6 bg-[#F0F0F0] rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between w-full relative">
        <div className="flex p-2 md:p-4 justify-start md:justify-center mb-3 md:mb-0 items-center gap-5 sm:gap-10 ">
          <button
            className={`transform transition-all ease-in-out duration-200 text-xl ${
              active === "friends"
                ? "border-b-2 border-[#3F3849] font-bold text-[#3F3849]"
                : "text-[#84838B] font-medium"
            }`}
            onClick={() => setActive("friends")}
          >
            Friends
          </button>
          <button
            className={`transform transition-all ease-in-out duration-200 text-xl ${
              active === "everyone"
                ? "border-b-2 border-[#3F3849] font-bold text-[#3F3849]"
                : "text-[#84838B] font-medium"
            }`}
            onClick={() => setActive("everyone")}
          >
            Everyone
          </button>
        </div>

        <div ref={dropdownRef}>
          <button
            className="flex justify-between w-36 rounded-md border-2 border-[#d5c3c2] border-lg px-3 py-1 sm:py-2 bg-[#FFEEEB]"
            onClick={showDropdown}
          >
            {selectedItem.text} <Image src={caret} alt="arrow-down" />
          </button>

          <div
            className={`absolute mt-2 w-36 bg-white  rounded shadow-lg z-10 transition duration-200 ease-linear ${
              isOpen ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            {isOpen ? (
              <>
                {dropdownItems.map((item) => (
                  <button
                    key={item.value}
                    className={`block px-4 py-2 text-gray text-sm w-full ${
                      selectedItem.value === item.value
                        ? "bg-primary text-white"
                        : ""
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.text}
                  </button>
                ))}{" "}
              </>
            ) : null}
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="pt-6">
          <LoadingSVG />
        </div>
      )}
      {/* Pictures Grid Container */}
      <div className="mt-9 grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 ">
        {evetData && renderCardData}
      </div>
    </div>
  );
};

export default TimelineEvents;
