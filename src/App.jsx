import { useState } from "react";
import Header from "./components/Header";
import MonitorList from "./components/MonitorList";
import VoteModal from "./components/VoteModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header onAddVote={() => setShowModal(true)} />

      <MonitorList />

      {showModal && (
        <VoteModal
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;