export function issueToCalendarEvent(issue: any) {
  const data = JSON.parse(issue.body);
  console.log(data);
  return {
    id: issue.number,
    title: `${data.type} - ${data.user}`,
    start: data.date,
    color:
      data.type === "WFH"
        ? "#3B82F6"
        : "#F97316",
  };
}