import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { Dispatch, SetStateAction } from "react";

type CalendarProps = {
  setWfhDays: Dispatch<SetStateAction<number>>;
}
export default function Calendar({
  setWfhDays
}: CalendarProps) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      droppable={true}
      editable={true}
      dateClick={(info) => {
        alert(`Selected: ${info.dateStr}`);
      }}
      drop={
        (info) => {
          console.log("what does info look like?", info);
          setWfhDays((prev) => prev - 1);
        }
      }
    />
  );
}

