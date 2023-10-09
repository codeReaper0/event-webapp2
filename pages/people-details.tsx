import EventCard from "@/components/eventCard";
import MainLayout from "@/components/layout/mainLayout";
import MyPeopleCardDetails from "@/components/myPeopleDetailsCard";
import PeopleHeader from "@/components/peopleHeader";

export default function PeopleDetails() {
  return (
    <MainLayout>
      <PeopleHeader />
      <div className=" w-full p-6 grid gap-6 grid-cols-2 lg:grid-cols-3">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </MainLayout>
  );
}
