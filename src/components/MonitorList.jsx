import { useContext, useState } from "react";
import { VoterContext } from "../context/VoterContext";
import MonitorCard from "./MonitorCard";

function MonitorList() {
  const { monitors } = useContext(VoterContext);
  console.log(monitors);
  return (
    <div>
      <h2>Monitors</h2>
      {monitors.map((monitor) => (
        <MonitorCard key={monitor.id} monitor={monitor}/>
      ))}
    </div>
  );
}

export default MonitorList;
