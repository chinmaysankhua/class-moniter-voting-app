import { createContext, useState } from "react";

export const VoterContext = createContext(null);

export const VoterProvider = ({ children }) => {
  const [monitors, setMonitors] = useState([
    {
      id: 1,
      name: "Suresh",
      voters: [],
    },
    {
      id: 2,
      name: "Deepank",
      voters: [],
    },
    {
      id: 3,
      name: "Abhik",
      voters: [],
    },
  ]);

  const addVote = (studentName, monitorId) => {
    setMonitors((previousMonitors) => {
      return previousMonitors.map((monitor) => {
        if (monitor.id === monitorId) {
          return {
            ...monitor,
            voters: [
              ...monitor.voters,
              {
                id: Date.now(),
                name: studentName,
              },
            ],
          };
        }

        return monitor;
      });
    });
  };

  return (
    <VoterContext.Provider value={{ monitors, addVote }}>
      {children}
    </VoterContext.Provider>
  );
};