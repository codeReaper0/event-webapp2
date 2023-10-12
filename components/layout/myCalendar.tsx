import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEventData } from "@/components/hooks/useEventData";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { events, error } = useEventData();
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="p-[20px]">
      <Calendar
        defaultDate={moment().toDate()}
        localizer={localizer}
        events={events}
        startAccessor="event_start"
        endAccessor="event_end"
        style={{ height: "80vh" }}
        tooltipAccessor="event_description"
        views={["month"]}
      />
    </div>
  );
};

export default MyCalendar;
