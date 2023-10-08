import MainLayout from "@/components/layout/mainLayout";
import * as React from 'react';
import ArrowUpLg from "@/components/icons/create-event/arrow-up-lg";
import ArrowUpSm from "@/components/icons/create-event/arrow-up-sm";
import LocationIconLg from "@/components/icons/create-event/location-lg";
import GroupIconLg from "@/components/icons/create-event/group-lg";
import LocationIconSm from "@/components/icons/create-event/location-sm";
import GroupIconSm from "@/components/icons/create-event/group-sm";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from "dayjs";
import Sidebar from "@/components/layout/sidebar";

const today = dayjs().add(0, 'day');

export default function CreateEvents() {
    return (
            <div className='w-full lg:h-full xsm:h-full lg:bg-brand-gray-100 xsm:bg-[#3F3849] shrink-0 flex lg:flex-row xsm:flex-col'>
                <div className="lg:flex md:hidden sm:hidden xsm:hidden">
                    <Sidebar />
                </div>
                <div className='h-full lg:pl-16 lg:pt-14 xsm:p-8 lg:rounded-none xsm:rounded-3xl lg:m-0 xsm:m-4 xsm:bg-white lg:bg-[#F7F6F8]'>
                    <div className='flex items-center gap-6'>
                        <ArrowUpLg />
                        <ArrowUpSm />
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-2xl font-bold leading-10'>Create Event</h1>
                            <p className='xsm:hidden lg:flex text-[#726E7C] font-normal text-base'>
                                Please ensure that you provide accurate information in this form to avoid any hiccups in this process.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 inline-flex flex-col items-start gap-8 md:w-full xsm:w-full lg:w-[591px] lg:ml-16">
                        <div className='xsm:hidden lg:flex items-center gap-6 w-full'>
                            <label className='text-lg font-semibold'>Event Name:</label>
                            <input type='text' placeholder='Enter the event name' className='flex flex-grow p-4 justify-center items-center gap-2 rounded-2xl border-2 border-black bg-[#F7F6F8]' />
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-6 w-full'>
                            <label className='text-lg font-semibold'>Event <br className='lg:block xsm:hidden'/> Description:</label>
                            <textarea placeholder='Enter the event description' className='flex flex-grow xsm:h-[122px] w-full h-44 p-4 justify-center items-center gap-2 rounded-2xl border-2 lg:border-black xsm:border-[#FFC6BC] bg-[#F7F6F8]' />
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-4'>
                            <h3 className='text-lg font-semibold inline-flex gap-1'><span className='xsm:hidden lg:inline-flex'>Event</span> Starts:</h3>
                            <div className='flex items-center gap-6'>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="date" className='font-medium text-base text-black opacity-70'>Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker 
                                                views={['day', 'month']} 
                                                openTo="day" 
                                                format="DD MMMM"
                                                defaultValue={today}
                                            />
                                    </LocalizationProvider>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="time" className='font-medium text-base text-black opacity-70'>Time</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopTimePicker 
                                                defaultValue={today}
                                            />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-4'>
                        <h3 className='text-lg font-semibold inline-flex gap-1'><span className='xsm:hidden lg:inline-flex'>Event </span> Ends:</h3>
                            <div className='flex items-center gap-6'>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="date" className='font-medium text-base text-black opacity-70'>Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker 
                                                views={['day', 'month']} 
                                                openTo="day" 
                                                format="DD MMMM"
                                                defaultValue={today} 
                                                disablePast
                                            />
                                    </LocalizationProvider>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="time" className='font-medium text-base text-black opacity-70'>Time</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopTimePicker 
                                                defaultValue={today}
                                            />
                                    </LocalizationProvider>
                                </div>    
                            </div>
                        </div>
                        <div className='xsm:hidden lg:block'>
                            <div className='flex lg:flex-row xsm:flex-col items-center gap-4'>
                                <div className='flex gap-2 items-center p-2'>
                                    <LocationIconLg />
                                    <button className='lg:text-[#3F3849] xsm:text-white text-base font-bold underline'>Add location</button>
                                </div>
                                <div className='flex gap-2 items-center p-2'>
                                    <GroupIconLg />
                                    <button className='lg:text-[#3F3849] xsm:text-white text-base font-bold underline'>Select Groups</button>
                                </div>
                                
                            </div>
                            <button className='mt-9 inline-flex justify-center items-center gap-2 py-5 px-6 rounded-2xl bg-[#FFC6BC] text-black text-base font-bold text-center lg:w-[312px]'>
                                Create Event
                            </button>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden xsm:block p-8'>
                    <div className='flex lg:flex-row xsm:flex-col lg:items-center gap-4 mx-4'>
                        <div className='flex gap-2 items-center p-2'>
                            <LocationIconSm />
                            <button className='lg:text-[#3F3849] xsm:text-white text-base font-bold underline'>Add location</button>
                        </div>
                        <div className='flex gap-2 items-center p-2'>
                            <GroupIconSm />
                            <button className='lg:text-[#3F3849] xsm:text-white text-base font-bold underline'>Select Groups</button>
                        </div>
                        
                    </div>
                    <button className='mt-9 inline-flex justify-center items-center gap-2 py-5 px-6 lg:rounded-2xl xsm:rounded-full bg-[#FFC6BC] text-black text-base font-bold text-center lg:w-[312px] xsm:w-full'>
                        Create Event
                    </button>
                </div>
            </div>
    )
}