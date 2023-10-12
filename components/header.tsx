import React from "react";
import Avatar from "assets/images/avatar.png";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import Image from "next/image";
import SearchBar from "@/components/searchBar";
import { HeaderProps } from "@/@types";

export default function Header({ title, info, show = true }: HeaderProps) {
  return (
    <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 p-4 lg:py-10 lg:px-0 gap-4">
      {/* Title section */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-brand-gray-400 font-medium">{info}</p>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Profile */}
      <div className="hidden lg:flex gap-2 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={Avatar}
            alt="logo"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="hidden md:inline-flex font-semibold text-lg">Salome</p>
      </div>
    </header>
  );
}
