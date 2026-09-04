import { useContext, useState } from "react";
import { VoterContext } from "../context/VoterContext";
import { askVotingAI } from "../services/gemini";

function ChatBot() {
  const { monitors } = useContext(VoterContext);

  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAI = async () => {
    if (!question.trim() || isLoading) {
      return;
    }

    const userMessage = question;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setQuestion("");
    setIsLoading(true);

    try {
      const answer = await askVotingAI(userMessage, monitors, messages);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "ai",
          text: answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "ai",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button className="chatbot-button" onClick={() => setIsOpen(true)}>
          🤖
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div>
              <h3>🤖 Voting AI</h3>
              <span>Ask about the election</span>
            </div>

            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 ? (
              <div className="chatbot-welcome">
                <h4>👋 Hello!</h4>
                <p>Ask me anything about the current voting results.</p>

                <div className="suggested-question">
                  <button onClick={() => setQuestion("Who is leading?")}>
                    Who is leading?
                  </button>

                  <button
                    onClick={() =>
                      setQuestion("How many total votes are there?")
                    }
                  >
                    Total votes?
                  </button>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    message.role === "user" ? "user-message" : "ai-message"
                  }`}
                >
                  {message.text}
                </div>
              ))
            )}
            {isLoading && (
              <div className="chat-message ai-message">
                AI is thinking... ⏳
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={question}
              disabled={isLoading}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAskAI();
                }
              }}
              placeholder="Ask about votes..."
            />

            <button onClick={handleAskAI} disabled={isLoading}>
              {isLoading ? "..." : "➤"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
