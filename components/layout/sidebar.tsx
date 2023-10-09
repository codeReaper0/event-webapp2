import { LogoutIcon } from "assets/icon/sideBarIcons";
import Image from "next/image";
import React from "react";
import NavLinks from "./navLinks";
import Logo from "assets/wetindeysup.png";

export default function Sidebar() {
  return (
    <aside className="w-[320px] bg-primary h-full lg:flex lg:flex-col md:flex md:flex-col xsm:hidden justify-between pb-8 rounded-r-3xl">
      <div className="w-full">
        {/* Icon */}
        <div className="inline-flex items-center gap-2 mt-6 mx-14 mb-16">
                <Image
                  src={Logo}
                  alt="logo"
                  width={201}
                  height={54}
                  className="w-auto h-auto"
                />
                <h3 className="text-brand-gray-100 text-lg font-bold">WetinDeySup</h3>
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
