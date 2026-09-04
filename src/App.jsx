import { useState } from "react";
import Header from "./components/Header";
import MonitorList from "./components/MonitorList";
import VoteModal from "./components/VoteModal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Header onAddVote={() => setShowModal(true)} />

      <main>
        <MonitorList />
      </main>

      {showModal && (
        <VoteModal
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;