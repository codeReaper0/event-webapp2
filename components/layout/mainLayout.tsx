import React, { useState } from "react";
import { MainLayoutProps } from "../../@types";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "./sidebar";
import HarmburgerIcon from "../icons/harmburger";
import Logo from "assets/wetindeysup.png";
import NavLinks from "./navLinks";
import { LogoutIcon } from "@/public/assets/icon/sideBarIcons";
import Image from "next/image";

type Anchor = "left" | "top" | "bottom" | "right";

function MainLayout({ children }: MainLayoutProps) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div className="lg:hidden bg-primary">
        <Button onClick={toggleDrawer("left", true)} sx={{ width: '100%', justifyContent: 'flex-end'}}>
          <HarmburgerIcon />
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <aside className="w-[320px] bg-primary h-full flex flex-col justify-between pb-8 rounded-r-3xl">
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
        </Drawer>
      </div>
      <div className="w-full h-screen overflow-hidden flex">
        <Sidebar />
        <main className="flex-grow h-full overflow-y-auto px-10 pb-10 bg-brand-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
