import './App.css'
import { useState } from 'react';
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar';
import { MAX_WFH_DAYS_PER_MONTH } from './WFH_RULES/wfh_rules';
import { useCalendarEvents } from './hook/useCalendarEvents';



function App() {
  const [remainingWfhDays, setWfhDays] = useState(MAX_WFH_DAYS_PER_MONTH);
  const { events, loading, refreshEvents } = useCalendarEvents();

  return (
    <div className="min-h-screen bg-slate-100 ">
        <div className="flex w-full">
          <Sidebar remainingWfhDays={remainingWfhDays}/>
            <div className="w-full p-6">{/*calendar*/}
                <h1 className="mb-6 text-3xl font-bold text-blue-600">
                  cal
                </h1>
                <Calendar setWfhDays={setWfhDays} events={events}/>
            </div>
        </div>
    </div>
  );
}

export default App;