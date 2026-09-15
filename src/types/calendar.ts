export type EventType = "WFH" | "LEAVE";

export interface CalendarEvent {
  id: number;
  user: string;
  type: string;
  title: string;
  start: Date;
  color: string;
}