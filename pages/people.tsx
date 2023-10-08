import MainLayout from "@/components/layout/mainLayout";
import Header from "@/components/header";
import MyPeopleCard from "@/components/myPeopleCard";

export default function People() {
  return (
    <MainLayout>
      <Header
        title="My People"
        info="Stay Connected to Your People’s Events."
      />
      <div className="bg-secondary rounded-2xl w-full p-6 grid grid-cols-3 gap-6">
        <MyPeopleCard title="Techies 💻🎶" events={16} />
        <MyPeopleCard title="YBNL Mafia 🎶" events={12} />
        <MyPeopleCard title="Techies 💻🎶" events={5} />
      </div>
    </MainLayout>
  );
}
