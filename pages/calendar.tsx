import React, { useState } from 'react';
import MainLayout from "@/components/layout/mainLayout";
import MyCalendar from "@/components/layout/myCalendar";
import Header from "@/components/header";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import events from '@/data/event';

export default function Calendar() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInputChange = (data : any) => {
    setSearchQuery(data.target.value);
  };

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <MainLayout>
      <Header
        title={"Calendar"}
        info={"Stay Connected to Your People’s Events."}
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
      <div className="w-full md:hidden flex flex-col gap-[10px]">
        {filteredEvents.map((event, index) => (
          <div className="rbc-event" key={index}>
            <div className="p-[10px]">
              <div className="flex justify-between items-center">
                <h3 className="text-[#33313E] text-lg font-bold"> {event?.title} </h3>
                <p className="text-xs"> {event?.start.toDateString()} </p>
              </div>
              <p className="text-[#333333] text-base font-bold">{event?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
