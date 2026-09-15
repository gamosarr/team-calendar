import { useMemo } from "react";
import { MAX_WFH_DAYS_PER_MONTH } from "../WFH_RULES/wfh_rules";
import type { CalendarEvent } from "../types/calendar";

export function useRemainingWfhDays(
  events: CalendarEvent[],
  selectedUser: string,
  displayedDate: Date
){
  return useMemo(() => {
    if(!selectedUser) return 0;

    const month = displayedDate.getMonth();
    const year = displayedDate.getFullYear();

    const wfhDaysThisMonth = events.filter((event)=>{
        const eventDate = new Date(event.start);

        return (
          event.user === selectedUser &&
          event.type === "WFH" &&
          eventDate.getMonth() === month &&
          eventDate.getFullYear() === year
        );
    }).length;

    return MAX_WFH_DAYS_PER_MONTH - wfhDaysThisMonth;
  }, [events, selectedUser, displayedDate]);
}