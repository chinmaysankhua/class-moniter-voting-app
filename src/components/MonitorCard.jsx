import { useContext } from "react";
import { VoterContext } from "../context/VoterContext";

function MonitorCard({ monitor }) {
  const { deleteVote } = useContext(VoterContext);

  return (
    <div>
      <h3>{monitor.name}</h3>

      <p>Total Votes : {monitor.voters.length}</p>

      {monitor.voters.map((voter) => (
        <div key={voter.id}>
          <span>{voter.name}</span>

          <button
            onClick={() => deleteVote(monitor.id, voter.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MonitorCard;
