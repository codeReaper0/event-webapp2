import React from "react";
import { SearchIcon } from "@/public/assets/icon/searchIcon";

export default function SearchBar() {
  return (
    <div className="w-full md:w-60 xl:w-80 h-14 relative">
      <input
        placeholder="Find an event"
        className="h-full w-full border border-black/40 rounded-2xl p-2 pl-16 text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
      />
      <div className="absolute left-5 top-5">
        <SearchIcon />
      </div>
    </div>
  );
}
