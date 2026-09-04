import { useContext } from "react";
import { VoterContext } from "../context/VoterContext";
import MonitorCard from "./MonitorCard";

function MonitorList() {
  const { monitors } = useContext(VoterContext);

  return (
    <section className="monitor-section">
      <h2>Monitor Candidates</h2>

      <div className="monitor-grid">
        {monitors.map((monitor) => (
          <MonitorCard
            key={monitor.id}
            monitor={monitor}
          />
        ))}
      </div>
    </section>
  );
}

export default MonitorList;