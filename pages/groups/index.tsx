import MainLayout from "@/components/layout/mainLayout";
import Header from "@/components/header";
import MyPeopleCard from "@/components/myPeopleCard";
import http from "@/http/interceptor";
import { useState, useEffect } from "react";
import CreateGroup from "@/components/createGroup";
import { Group } from "@/@types";
import TechiesImage from "assets/mypeople/people1.png";
import SkeletonLoader from "@/components/groupSkeletonLoader";

export default function People() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = "https://events-be-python-psi.vercel.app/api/group";
  
  function getRandomColor() {
    const colors = ["#D2F5FE", "#EEE0FF", "#FFE0C4", "#FFC6BC"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  function getRandomEvents() {
    const events = [4, 10, 6, 8, 5, 3];
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  }
  

  // async function to fetch the data
  const fetchGroups = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setGroups(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);


  // const getGroups = async () => {
  //   try {
  //     const res = await http.get("/group");
  //     console.log(res);
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };


  return (
    <MainLayout title="Groups">
      <Header title="My Groups" info="Stay Connected to Your Group's Events." />
      <div className="p-4 lg:p-0">
        <CreateGroup />
        {isLoading ? (
          <div className="bg-secondary grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 rounded-2xl">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
        </div>
        ) : (
          groups.length > 0 ? (
            <div className="bg-secondary grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 rounded-2xl">
              {groups.map((group) => (
                <MyPeopleCard
                  key={group.pk}
                  imgSrc={TechiesImage}
                  // imgSrc={group.group_name}
                  bgColor={getRandomColor()}
                  events={getRandomEvents()}
                  name={group.group_name}
                  id={group.pk} 
                />
              ))}
            </div>
          ) : (
            <p className="text-xl p-4 text-center">
              There are no groups currently, create one to connect with friends.
            </p>
          )
        )}
      </div>
    </MainLayout>
  );
}
