import Header from "@/components/header";
import SettingsLayout from "@/components/layout/SettingsLayout";
import MainLayout from "@/components/layout/mainLayout";
import React from "react";

export default function Help() {
  return (
    <MainLayout>
      <div className="w-full">
        <Header
          title="Settings"
          info="Configure the settings to suit your preferences"
        />

        <SettingsLayout>dddjkd</SettingsLayout>
      </div>
    </MainLayout>
  );
}
