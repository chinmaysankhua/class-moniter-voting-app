import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MonitorList from "./components/MonitorList";
import VoteModal from "./components/VoteModal";
import ChatBot from "./components/ChatBot";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Header onAddVote={() => setShowModal(true)} />

      <main>
        <MonitorList />

        <ChatBot />
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