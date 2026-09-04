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
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Vote</h2>

          <button onClick={onClose}>×</button>
        </div>

        <div className="form-group">
          <label>Student Name</label>

          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label>Choose Monitor</label>

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
        </div>

        <div className="modal-actions">
          <button onClick={handleVote}>Vote</button>

          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default VoteModal;
