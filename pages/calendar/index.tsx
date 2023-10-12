import React, { useState } from 'react';
import MainLayout from "@/components/layout/mainLayout";
import MyCalendar from "@/components/layout/myCalendar";
import Header from "@/components/header";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import { useEventData } from '@/components/hooks/useEventData';

export default function Calendar() {
  const {events, error} = useEventData();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInputChange = (data : any) => {
    setSearchQuery(data.target.value);
  };

  const filteredEvents = events.filter((event) => {
    return (
      event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.event_description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  if (error)(
    <div className="rbc-event">
      <div className="p-[10px]">
        <p className="text-[#333333] text-base font-medium capitalize">{error}</p>
      </div>
    </div>
  )
  return (
    <MainLayout>
      <Header
        title={"Calendar"}
        info={"Stay Connected to Your People’s Events."}
        show={false}
      />
      <div className="w-full flex gap-[15px] border border-black/40 p-[10px] rounded-lg items-center">
        <SearchIcon />
        <input
          placeholder="Find an event"
          className="w-full outline-none border-none   text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <MyCalendar />
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[10px]">
        {filteredEvents.map((event, index) => (
          <div className="rbc-event" key={index}>
            <div className="p-[10px]">
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="text-[#33313E] text-lg font-bold"> {event?.event_name} </h3>
                <p className="text-xs"> {event?.event_start.toDateString()} </p>
              </div>
              <p className="text-[#333333] text-base font-medium capitalize">{event?.event_description}</p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
