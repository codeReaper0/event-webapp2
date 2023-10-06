import React from "react";
import {twMerge} from "tailwind-merge";
import {MainLayoutProps} from "../../@types";

function MainLayout({children, className}: MainLayoutProps) {
  return (
    <main
      className={twMerge(
        "w-full relative h-screen overflow-hidden ",
        className
      )}
    >
      {children}
    </main>
  );
}

export default MainLayout;
