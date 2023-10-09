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
      <MyPeopleCard />
    </MainLayout>
  );
}
