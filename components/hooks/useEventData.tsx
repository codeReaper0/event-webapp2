import { EventData } from '@/@types';
import { useEffect, useState } from 'react';

export function useEventData() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [error, setError] = useState<string>("");
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = (endpoint: string) => fetch(`${baseURL}/${endpoint}`)
    .then(response => response.json())
    .then((response: EventData[]) => {
      const formattedData = response.map((event) => ({
        ...event,
        event_start: new Date(event.event_start),
        event_end: new Date(event.event_end),
      }));
      console.log(formattedData);
      setEventData(formattedData);
    })
    .catch(err => {
      setError(err);
    });

  useEffect(() => {
    fetchData("/events");
  }, []);

  return { events: eventData, error };
}
