<<<<<<< HEAD
import MainLayout from '@/components/layout/mainLayout';
import { TimelineProps } from '@/@types';
import MyTimeline from '@/components/layout/myTimeline';

const Timeline: React.FC<TimelineProps> = () => {
    return (
        <MainLayout>
            <MyTimeline />
        </MainLayout>
    );
};

export default Timeline;
=======
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
>>>>>>> 63e9c5d89ee68de6147c30f81c803da2bef59031
