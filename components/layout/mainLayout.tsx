import React from "react";
import { MainLayoutProps } from "../../@types";
import Sidebar from "./sidebar";

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar />

      <main className="flex-grow h-full overflow-y-auto px-10 pb-10 bg-brand-gray-100">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
