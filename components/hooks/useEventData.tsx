import { EventData } from "@/@types";
import { useEffect, useState } from "react";

export function useEventData() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = (endpoint: string) =>
    fetch(`${baseURL}/${endpoint}`)
      .then((response) => response.json())
      .then((response: EventData[]) => {
        const formattedData = response.map((event) => ({
          ...event,
          event_start: new Date(event.event_start),
          event_end: new Date(event.event_end),
        }));
        setEventData(formattedData);
      })
      .catch((err) => {
        setError(err);
      });

  useEffect(() => {
    setLoading(true);
    fetchData("/events");
    setLoading(false);
  }, []);

  return { events: eventData, error, loading };
}
