import { useContext } from "react";
import { VoterContext } from "../context/VoterContext";

function Header({ onAddVote }) {
  const { monitors } = useContext(VoterContext);

  const totalVotes = monitors.reduce(
    (total, monitor) => total + monitor.voters.length,
    0
  );

  return (
    <header className="header">
      <div>
        <h1>Class Monitor Vote</h1>
        <p>Total Votes: {totalVotes}</p>
      </div>

      <button className="add-vote-btn" onClick={onAddVote}>
        + Add New Vote
      </button>
    </header>
  );
}

export default Header;