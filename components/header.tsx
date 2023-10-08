import React from "react";
import Avatar from "assets/images/avatar.png";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import Image from "next/image";
import { HeaderProps } from "@/@types";

export default function Header({ title, info }: HeaderProps) {
  return (
    <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 py-10">
      {/* Title section */}
      <div className="">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-brand-gray-400 font-medium">{info}</p>
      </div>

      {/* Search */}
      <div className="w-80 h-14 relative">
        <input
          placeholder="Find an event"
          className="h-full w-full border border-black/40 rounded-2xl p-2 pl-16 text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
        />
        <div className="absolute left-5 top-5">
          <SearchIcon />
        </div>
      </div>

      {/* Profile */}
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={Avatar}
            alt="logo"
            width={200}
            height={200}
            className="w-auto h-auto"
          />
        </div>
        <p className="font-semibold text-lg">Salome</p>
      </div>
    </header>
  );
}
