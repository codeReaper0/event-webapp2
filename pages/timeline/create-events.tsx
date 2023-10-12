import * as React from 'react';
import Sidebar from "@/components/layout/sidebar";
import ArrowUpLg from "@/components/icons/create-event/arrow-up-lg";
import ArrowUpSm from "@/components/icons/create-event/arrow-up-sm";
import LocationIconLg from "@/components/icons/create-event/location-lg";
import GroupIconLg from "@/components/icons/create-event/group-lg";
import LocationIconSm from "@/components/icons/create-event/location-sm";
import GroupIconSm from "@/components/icons/create-event/group-sm";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from 'react';
import XIcon from '@/components/icons/create-event/x-icon';
import ImageUpload from '@/components/icons/create-event/image-upload';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

const today = dayjs().add(0, 'day');

type FormValues = {
    title: string;
    description: string;
    location: string;
    start_date: string;
    group: number;
    end_date: string;
    start_time: string;
    end_time: string;
    image: string | null;
}

export default function CreateEvents(props: { [x: string]: any; components: any; }) {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [image, setImage] = useState<string | null>(null);
    const [imageName, setImageName] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
    const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(today);
    const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(today);
    const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(today);
    const router = useRouter();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const eventData = {
                title: data.title,
                description: data.description,
                location: data.location,
                group: data.group,
                start_date: startDate ? startDate.toISOString() : '', 
                end_date: endDate ? endDate.toISOString() : '', 
                start_time: startTime ? startTime.toISOString() : '', 
                end_time: endTime ? endTime.toISOString() : '', 
                image: data.image || null,
            };

            console.log('Data to be sent:', eventData);
    
            const response = await fetch('https://events-be-python-psi.vercel.app/api/events/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            });

    
          if (response.status === 201) {
            console.log('Event created successfully.');
            router.push('/timeline');
          } else {
            console.error('Event creation error.');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.type.startsWith("image/")) {
                alert("Please select an image file.");
                return;
            }
    
            if (file.size > 5 * 1024 * 1024) {
                alert("Image size should not exceed 5MB.");
                return;
            }
    
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
            setImageName(file.name);
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        setImageName(null);
        const input = document.getElementById("image-upload-input") as HTMLInputElement;
        if (input) {
        input.value = "";
        }
    };
    
    return (
            <div className='w-full lg:h-full xsm:h-full lg:bg-brand-gray-100 xsm:bg-primary shrink-0 flex lg:flex-row xsm:flex-col'>
                <div className="lg:flex md:hidden sm:hidden xsm:hidden">
                    <Sidebar />
                </div>
                <div className='h-full lg:pl-16 lg:pt-14 xsm:p-8 lg:rounded-none xsm:rounded-3xl lg:m-0 xsm:m-4 xsm:bg-white lg:bg-brand-gray-100'>
                    <div className='flex items-center gap-6'>
                        <Link href='/timeline'>
                            <ArrowUpLg />
                            <ArrowUpSm />
                        </Link>
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-2xl font-bold leading-10'>Create Event</h1>
                            <p className='xsm:hidden lg:flex text-brand-gray-400 font-normal text-base'>
                                Please ensure that you provide accurate information in this form to avoid any hiccups in this process.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 inline-flex flex-col items-start gap-8 md:w-full xsm:w-full lg:w-[591px] lg:ml-16">
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-6 w-full'>
                            <label className='text-lg font-semibold'>Event Name:</label>
                            <div className="flex flex-col gap-1 w-full">
                                <input 
                                    type='text' 
                                    placeholder='Enter the event name' 
                                    className='flex flex-grow p-4 justify-center items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100' 
                                    {...register("title", { required: true })}
                                />
                                {errors.title && <p className="text-red-500">Event name is required</p>}
                            </div>
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-6 w-full'>
                            <label className='text-lg font-semibold'>Event Description:</label>
                            <div className="flex flex-col gap-1 w-full">
                                <textarea 
                                    placeholder='Enter the event description' 
                                    className='flex flex-grow xsm:h-[122px] w-full lg:h-28 p-4 justify-center items-center gap-2 rounded-2xl border-2 lg:border-black xsm:border-brand-pink-400 bg-brand-gray-100' 
                                    {...register("description", { required: true })}
                                />
                                {errors.description && <p className="text-red-500">Event description is required</p>}
                            </div>
                        </div>
                        <div className="flex lg:flex-row xsm:flex-col items-start gap-6 w-full">
                            <label className='text-lg font-semibold'>Event <br className='hidden lg::block'/> Image:</label>
                            <div className="flex flex-grow px-2 py-4 items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100">
                                <div className="text-center flex items-center ">
                                    {image ? (
                                    <>
                                        <Image src={image} alt="Uploaded" height={24} width={24} className="rounded items-center h-full" />
                                        <div className="flex justify-between w-full">
                                            <p>{imageName}</p>
                                            <button onClick={handleImageRemove} className="remove-button">
                                                <XIcon />
                                            </button>
                                        </div>
                                    </>
                                    ) : (
                                        
                                        <ImageUpload  />
                                    )}
                                </div>
                                <div className="flex items-center">
                                            
                                    <input
                                    type="file"
                                    {...register("image", { required: true })}
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    id="image-upload-input"
                                    className="hidden"
                                    />
                                    {image ? (
                                    null
                                    ) : (
                                    <label htmlFor="image-upload-input" className="cursor-pointer text-[#9CA3AF]  max-w-[347px]">
                                        Upload an image of your event
                                    </label>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start lg:items-center gap-6 w-full'>
                            <label className='text-lg font-semibold'>Location:</label>
                            <div className="flex flex-col gap-1 w-full">
                                <div className='flex flex-grow py-2 px-4 items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100'>
                                    <LocationIconLg />
                                    <input 
                                        type='text' 
                                        placeholder='Enter event location' 
                                        className='w-full bg-transparent p-2'
                                        {...register("location", { required: true })}
                                    />
                                
                                </div>
                                {errors.location && <p className="text-red-500">Location is required</p>}
                            </div>
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start lg::items-center gap-6 w-full'>
                            <label className='text-lg font-semibold'>Event <br className='hidden lg:block'/> Group:</label>
                            <div className="flex flex-col gap-1 w-full">
                                <div className='flex flex-grow py-2 px-4 items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100'>
                                    <GroupIconLg />
                                    <select 
                                        id="select" 
                                        className='flex justify-between w-full bg-transparent p-2'
                                        {...register("group", {
                                            required: 'Event group is required', // Required validation
                                        })}
                                    >
                                        <option className='text-[#9CA3AF]'>Enter event group</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                {errors.group && <p className="text-red-500">{errors.group.message}</p>}
                            </div>
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-6'>
                            <label className='text-lg font-semibold inline-flex gap-1'><span className='xsm:hidden lg:inline-flex'>Event</span> Starts:</label>
                            <div className='flex items-center gap-6'>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="date" className='font-medium text-base text-black opacity-70'>Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker 
                                                views={['day', 'month', 'year']} 
                                                openTo="day" 
                                                format="DD/MM/YY"
                                                defaultValue={null}
                                                className='datepicker'
                                                value={startDate}
                                                onChange={(newValue) => setStartDate(newValue)}
                                            />
                                    </LocalizationProvider>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="time" className='font-medium text-base text-black opacity-70'>Time</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopTimePicker 
                                            defaultValue={today}
                                            className='timepicker'  
                                            value={startTime}
                                            onChange={(newValue) => setStartTime(newValue)}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:flex-row xsm:flex-col items-start gap-6'>
                            <label className='text-lg font-semibold inline-flex gap-1'><span className='xsm:hidden lg:inline-flex'>Event </span> Ends:</label>
                            <div className='flex items-center gap-6'>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="date" className='font-medium text-base text-black opacity-70'>Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker 
                                                views={['day', 'month']} 
                                                openTo="day" 
                                                format="DD/MM/YY"
                                                defaultValue={null}
                                                className='datepicker' 
                                                disablePast
                                                value={endDate}
                                                onChange={(newValue) => setEndDate(newValue)}
                                            />
                                    </LocalizationProvider>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <label htmlFor="time" className='font-medium text-base text-black opacity-70'>Time</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>      
                                            <DesktopTimePicker 
                                                defaultValue={today}
                                                className='timepicker'
                                                value={endTime}
                                                onChange={(newValue) => setEndTime(newValue)}
                                                sx={ {
                                                    '& .MuiInputAdornment-root': {
                                                      display: '', // Hide the default icon
                                                    },
                                                  }}
                                            />
                                    </LocalizationProvider>
                                </div>    
                            </div>
                        </div>
                        <div className=''>
                            <button type='submit' className='mt-9 md:mb-36 inline-flex justify-center items-center gap-2 py-5 px-6 md:rounded-2xl rounded-full bg-brand-pink-400 text-black text-base font-bold text-center min-w-[295px] md:min-w-[312px]'>
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
{/* 
                <div className='lg:hidden xsm:block px-8'>
                    <div className='flex lg:flex-row xsm:flex-col lg:items-center gap-2 mx-4'>
                        <div className='flex gap-2 items-center p-2'>
                            <LocationIconSm />
                            <button className='lg:text-primary xsm:text-white text-base font-bold underline'>Add location</button>
                        </div>
                        <div className='flex gap-2 items-center p-2'>
                            <GroupIconSm />
                            <button className='lg:text-primary xsm:text-white text-base font-bold underline'>Select Groups</button>
                        </div>
                        
                    </div>
                    <button type='submit' className='mt-14 inline-flex justify-center items-center gap-2 py-5 px-6 lg:rounded-2xl xsm:rounded-full bg-brand-pink-400 text-black text-base font-bold text-center lg:w-[312px] xsm:w-full'  onClick={handleSubmit(onSubmit)}>
                        Create Event
                    </button>
                </div> */}
            </div>
    )
}