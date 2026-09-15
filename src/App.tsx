import './App.css'
import { useEffect, useState } from 'react';
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar';
import { useCalendarEvents } from './hook/useCalendarEvents';
import {useRemainingWfhDays } from './hook/useRemainingWfhDays';



function App() {
  const { events, loading, refreshEvents } = useCalendarEvents();
  const [selectedUser, setSelectedUser] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const remainingWfhDays = useRemainingWfhDays(events, selectedUser, currentDate);
  const [wfhDays, setWfhDays] = useState<number>(remainingWfhDays);
  console.log('updatedRemainingWfhDays', remainingWfhDays);
  console.log('selecteduser in app', selectedUser);
  console.log('events: ', events,loading, refreshEvents);

  useEffect(()=>{
    if(remainingWfhDays === undefined) return;
    setWfhDays(remainingWfhDays);
  },[remainingWfhDays]);
  
  return (
    <div className="min-h-screen bg-slate-100 ">
        <div className="flex w-full">
          <Sidebar remainingWfhDays={wfhDays} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <div className="w-full p-6">{/*calendar*/}
                <h1 className="mb-6 text-3xl font-bold text-blue-600">
                  SD54 WFH Calendar Plotter
                </h1>
                <Calendar setWfhDays={setWfhDays} events={events} setCurrentDate={setCurrentDate}/>
            </div>
        </div>
    </div>
  );
}

export default App;