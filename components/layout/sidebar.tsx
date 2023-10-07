import { LogoutIcon } from "assets/icon/sideBarIcons";
import Image from "next/image";
import React from "react";
import NavLinks from "./navLinks";
import Logo from "assets/images/logo.png";

export default function Sidebar() {
  return (
    <aside className="w-[320px] bg-primary h-full flex flex-col justify-between pb-8 rounded-r-3xl">
      <div className="w-full">
        {/* Icon */}
        <div className="flex w-full justify-center">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto p-6"
          />
        </div>

        <NavLinks />
      </div>

      <button className="flex gap-3 items-center text-white/50 font-medium px-12">
        <LogoutIcon />
        <span>Log Out</span>
      </button>
    </aside>
  );
}
