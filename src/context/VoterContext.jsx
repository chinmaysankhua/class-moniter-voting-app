import { createContext, useEffect, useState } from "react";

export const VoterContext = createContext(null);
const STORAGE_KEY = "class-monitor-votes";
const defaultMonitors = [
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
];
export const VoterProvider = ({ children }) => {
  const [monitors, setMonitors] = useState(() => {
    const savedMonitors = localStorage.getItem(STORAGE_KEY);

    if (savedMonitors) {
      return JSON.parse(savedMonitors);
    }

    return defaultMonitors;
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(monitors));
  }, [monitors]);
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

  const deleteVote = (monitorId, voterId) => {
    setMonitors((previousMonitors) => {
      return previousMonitors.map((monitor) => {
        if (monitor.id === monitorId) {
          return {
            ...monitor,
            voters: monitor.voters.filter((voter) => voter.id !== voterId),
          };
        }

        return monitor;
      });
    });
  };

  return (
    <VoterContext.Provider value={{ monitors, addVote, deleteVote }}>
      {children}
    </VoterContext.Provider>
  );
};
