import { useContext, useState } from "react";
import { VoterContext } from "../context/VoterContext";

function VoteModal({ onClose }) {
  const { monitors, addVote } = useContext(VoterContext);

  const [studentName, setStudentName] = useState("");
  const [selectedMonitor, setSelectedMonitor] = useState("");

  const handleVote = () => {
  if (!studentName.trim() || !selectedMonitor) {
    alert("Please enter student name and select a monitor.");
    return;
  }

  addVote(studentName.trim(), Number(selectedMonitor));

  setStudentName("");
  setSelectedMonitor("");

  onClose();
};

  return (
    <div>
      <h2>Add New Vote</h2>

      <label>
        Student Name:
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </label>

      <br />

      <label>
        Choose Monitor:
        <select
          value={selectedMonitor}
          onChange={(e) => setSelectedMonitor(e.target.value)}
        >
          <option value="">Select Monitor</option>

          {monitors.map((monitor) => (
            <option key={monitor.id} value={monitor.id}>
              {monitor.name}
            </option>
          ))}
        </select>
      </label>

      <br />

      <button onClick={handleVote}>Vote</button>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default VoteModal;