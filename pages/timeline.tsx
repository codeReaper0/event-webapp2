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
