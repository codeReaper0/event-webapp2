
import Header from "@/components/header";
import MainLayout from "@/components/layout/mainLayout";
import { TimelineProps } from '@/@types';
import MyTimeline from '@/components/layout/myTimeline';

export default function Home() {
  return (
    <MainLayout>
      <Header title="Header" info="Explore the events happening around you." />
      <MyTimeline />
    </MainLayout>
  );
}
