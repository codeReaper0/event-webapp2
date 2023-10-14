import MainLayout from "@/components/layout/mainLayout";
import Header from "@/components/header";
import MyPeopleCard from "@/components/myPeopleCard";
import http from "@/http/interceptor";
import { useEffect, useState } from "react";
import CreateGroup from "@/components/createGroup";

export default function People() {
  const [groups, setGroups] = useState("");


  return (
    <MainLayout title="Groups">
      <Header title="My Groups" info="Stay Connected to Your Group's Events." />
      <div className="p-4 lg:p-0">
        <CreateGroup />
        {groups ? (
          <div className="bg-secondary grid grid-cols-3 gap-6 p-4 rounded-2xl">
            {/* <MyPeopleCard /> */}
          </div>
        ) : (
          <p className="text-xl p-4 text-center">
            There are no groups currently, create one to connect with friends.
          </p>
        )}
      </div>
    </MainLayout>
  );
}
