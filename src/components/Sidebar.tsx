import { useEffect, useRef} from "react";
import { Draggable } from "@fullcalendar/interaction";
import SelectUser from "./SelectUser";

type SideBarProps = {
    remainingWfhDays: number | undefined;
    selectedUser: string;
    setSelectedUser: (user: string) => void;
}


export default function Sidebar({
    remainingWfhDays: remainingWfhDays,
    selectedUser: selectedUser,
    setSelectedUser: setSelectedUser,
}: SideBarProps){
    const containerRef = useRef<HTMLDivElement>(null);
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
            <SelectUser selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <div ref={containerRef}>
                {
                    remainingWfhDays !== undefined ? (
                        Array.from({length: remainingWfhDays}, (_, index) => (
                            <div key={index} className="fc-event bg-blue-500 text-white p-2 rounded mb-2">
                                WFH - {selectedUser}
                            </div>    
                        ))
                        // <div>Select a user to see remaining WFH days</div>

                    ) : (
                        <div>selected</div>
                    )
                }
                {/* {
                    remainingWfhDays === 0 ? (
                        Array.from({length: remainingWfhDays}, (_, index) => (
                            <div key={index} className="fc-event bg-blue-500 text-white p-2 rounded mb-2">
                                WFH
                            </div>    
                        ))
                    ) : (
                        <div>Select a user to see remaining WFH days</div>
                    )
                } */}
                
            </div>
        </div>
    )
}