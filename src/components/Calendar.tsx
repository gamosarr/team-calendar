import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { Dispatch, SetStateAction } from "react";

type CalendarProps = {
  setWfhDays: Dispatch<SetStateAction<number>> | undefined;
  events: any[];
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}
export default function Calendar({
  setWfhDays,
  events,
  setCurrentDate
}: CalendarProps) {
  console.log('rendered events', events);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      droppable={true}
      editable={true}
      datesSet={(arg)=>{
        setCurrentDate(arg.view.currentStart)}
      }
      dateClick={(info) => {
        alert(`Selected: ${info.dateStr}`);
      }}
      drop={
        (info) => {
          console.log("what does info look like?", info);
          setWfhDays?.((prev) => prev - 1);
        }
      }
      events={events}
    />
  );
}

