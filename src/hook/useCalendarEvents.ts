import { useEffect, useState } from "react";
import { getIssues } from "../services/githubApi";
import { issueToCalendarEvent } from "../utils/eventMapper";
import type { CalendarEvent } from "../types/calendar";

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  async function refreshEvents() {
    try {
      const issues = await getIssues();

      const calendarEvents = issues.map(
        issueToCalendarEvent
      );

      setEvents(calendarEvents);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshEvents();
  }, []);

  return {
    events,
    loading,
    refreshEvents,
  };
}