
import TimelineCard from "./TimelineCard";

const MyTimeline: React.FC = () => {

    return (
        <div className='w-full h-[87vh] my-8 pb-8 overflow-auto scrollbar-w-0'>
            {/* Discover and Create */}
            <div className="relative bg-[url('/Rectangle27.png')] bg-cover bg-center min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3F3849] via-[rgba(63, 56, 73, 0.83)] to-[rgba(63, 56, 73, 0.00)] z-0"></div>
                <div className="p-12">
                    <div className="max-w-[420px] w-full font-sans relative z-10">
                        <h1 className='text-white font-bold text-[28px] leading-[42px]'>Discover and Create Memorable Events</h1>
                        <p className="text-[#FFFFFF80] mt-1 text-base font-medium">Craft events that reflect your passions and interests.</p>
                        <button className='mt-8 flex gap-2 items-center py-3 px-4 text-black bg-[#FFC6BC] rounded-2xl font-sans font-medium active:bg-[#fadfc8] active:scale-[0.98]'>Create An Event</button>
                    </div>
                </div>
            </div>
            {/* Timeline Card Section */}
            <TimelineCard />
        </div>
    );
};

export default MyTimeline;
