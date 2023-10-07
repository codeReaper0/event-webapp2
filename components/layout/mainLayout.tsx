import React from "react";
import { twMerge } from "tailwind-merge";
import { MainLayoutProps } from "../../@types";
import Sidebar from "./sidebar";

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar />
      <main className="flex grow p-10">{children}</main>
    </div>
  );
}

export default MainLayout;
