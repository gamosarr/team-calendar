import { useEffect, useRef, useState, } from "react";
import { Draggable } from "@fullcalendar/interaction";
// import { MAX_WFH_DAYS_PER_MONTH } from "../WFH_RULES/wfh_rules";

type SideBarProps = {
    remainingWfhDays: number;
}


export default function Sidebar({
    remainingWfhDays: remainingWfhDays
}: SideBarProps){
    const containerRef = useRef<HTMLDivElement>(null);
    // const [wfhDays, setWfhDays] = useState(MAX_WFH_DAYS_PER_MONTH);

    useEffect(() => {
        if (!containerRef.current) return;

        const draggable = new Draggable(containerRef.current, {
            itemSelector: ".fc-event",
                eventData: (eventEl) => ({
                title: eventEl.innerText,
                }),
            });

        return () =>{
            draggable.destroy();
        }

    }, []);

    return (
        <div className="w-1/5 p-6">
            <div ref={containerRef}>
                {Array.from({length: remainingWfhDays}, (_, index) => (
                    <div key={index} className="fc-event bg-blue-500 text-white p-2 rounded mb-2">
                        WFH
                    </div>    
                ))}
            </div>
        </div>
    )
}