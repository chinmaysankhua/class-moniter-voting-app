import { useContext } from "react";
import { VoterContext } from "../context/VoterContext";

function MonitorCard({ monitor }) {
  const { deleteVote } = useContext(VoterContext);

  return (
    <div className="monitor-card">
      <div className="monitor-card-header">
        <div>
          <h3>{monitor.name}</h3>
          <p>Total Votes: {monitor.voters.length}</p>
        </div>
      </div>

      <div className="voter-list">
        {monitor.voters.length > 0 ? (
          monitor.voters.map((voter) => (
            <div className="voter-item" key={voter.id}>
              <span>{voter.name}</span>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteVote(monitor.id, voter.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="no-votes">No votes yet</p>
        )}
      </div>
    </div>
  );
}

export default MonitorCard;