import Header from "@/components/header";
import MainLayout from "@/components/layout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Header title="Header" info="Explore the events happening around you." />
      {/* Let your timeline be here */}
    </MainLayout>
  );
}
