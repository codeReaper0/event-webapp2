import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../../data/event';

const localizer = momentLocalizer(moment);

const MyCalendar = () => (
  <div className='p-[40px]'>
    <Calendar
      defaultDate={moment().toDate()}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "90vh" }}
      tooltipAccessor="description"
    />
  </div>
);

export default MyCalendar;
