import { useState } from "react";
import { SD54_MEMBERS } from "../WFH_RULES/wfh_rules";


export default function SelectUser() {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div className="mb-4">
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="
          w-full
          rounded-lg
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-sm
          shadow-sm
          transition
          focus:border-blue-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option value="" disabled>
          👤 Who are you?
        </option>

        {SD54_MEMBERS.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
  );
}