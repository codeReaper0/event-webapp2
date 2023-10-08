import { ArrowButtonIcon } from "@/public/assets/icon/arrowButtonIcon";
import { RightArrowIcon } from "@/public/assets/icon/rightArrowIcon";
import Image from "next/image";

type Props = {
  image: string;
  eventName: string;
  eventTime: string;
  eventzDate: string;
  eventLocation: string;
};

export default function EventCard(props: Props) {
  const colors = [
    "bg-brand-gray-200",
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
            src={props.image}
            alt={props.eventName}
            width={270}
            height={160}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="relative flex justify-between">
          <div className="space-y-1">
            <div className="font-bold text-xl tracking-[0.2px] text-primary">
              {props.eventName}
            </div>
            <div className="font-medium">{props.eventzDate}</div>
            <div className="font-medium opacity-70">{props.eventTime}</div>
            <div className="font-normal opacity-80">{props.eventLocation}</div>
          </div>
          <div className="flex items-center">
            <button className="relative z-10">
              <ArrowButtonIcon />
            </button>
          </div>
          <div className="absolute -right-6 -top-14">
            <Image
              src="/assets/images/rectangles.png"
              alt="rectangles"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div>
          <a href="#" className="underline text-primary font-bold text-lg">
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
            {[...Array(3)].map((item, index) => (
              <Image
                key={index}
                width={24}
                height={24}
                src="/assets/images/avatar.png"
                alt="avatar"
                className="rounded-full"
              />
            ))}
          </div>
          <span>11 Comments</span>
        </div>
        <RightArrowIcon />
      </a>
    </div>
  );
}
