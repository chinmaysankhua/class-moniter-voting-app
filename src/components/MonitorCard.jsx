

function MonitorCard({ monitor }) {
  return (
    <div>
      <h3>{monitor.name}</h3>
      <p>Total Votes : {monitor.voters.length}</p>
    </div>
  );
}

export default MonitorCard;

