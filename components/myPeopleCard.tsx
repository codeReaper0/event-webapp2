import Image from "next/image";
import TechiesImage from "assets/mypeople/people1.png";

type MyPeopleCardProps = {
  title: string;
  events: number;
};

export default function MyPeopleCard({ title, events }: MyPeopleCardProps) {
  return (
    <div className="px-[16px] py-[24px] w-[302px] h-[279px] flex flex-col gap-[16px] bg-pink-400 rounded-[16px] relative">
      <Image
        className="rounded-[16px] w-[270px]"
        src={TechiesImage}
        alt="Techies"
      />
      <div className="flex flex-col gap-[12px]">
        <h1 className="font-bold font-montserrat text-[20px] text-primary">
          {title}
        </h1>
        <h4 className="font-semibold font-sans text-[16px] text-black">
          {events} events
        </h4>
      </div>
      <span className="absolute top-[136px] left-[193px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="119"
          viewBox="0 0 85 119"
          fill="none"
        >
          <rect
            x="35.5122"
            y="24.5854"
            width="73.7565"
            height="103.806"
            fill="url(#paint0_linear_14_7228)"
          />
          <rect
            width="73.7565"
            height="103.806"
            fill="url(#paint1_linear_14_7228)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14_7228"
              x1="72.3905"
              y1="32.0977"
              x2="72.3905"
              y2="188.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_14_7228"
              x1="36.8783"
              y1="30.049"
              x2="36.8783"
              y2="161.097"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
}
