import { EventData } from "@/@types";
import { useEffect, useState } from "react";

export function useEventData() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  // const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const baseURL = "https://events-be-python-mrwc1kqzj-fikayos-projects-0e7310e4.vercel.app/api/events/all/";
  const token = "randoemerjrjerer";
  
  const fetchData = (endpoint: string) => {
    fetch(`${baseURL}/${endpoint}`, {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${token}`,
        'content-type': 'application/json',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Customize this error message
      }
      return response.json();
    })
    .then((response: EventData[]) => {
      const formattedData = response.map((event) => ({
        ...event,
        start_date: new Date(`${event.start_date}T${event.start_time}`),
        end_date: new Date(`${event.end_date}T${event.end_time}`),
      }));
      setEventData(formattedData);
    })
    .catch((err) => {
      setError(err.message);
    });
  }
  

  useEffect(() => {
    setLoading(true);
    fetchData("/events/all");
    setLoading(false);
  }, []);

  return { events: eventData, error, loading };
}
