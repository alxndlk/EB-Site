import React, { createContext, useContext, useEffect, useState } from "react";

type ServerStatus = {
  players: { online: number };
} | null;

const ServerStatusContext = createContext<ServerStatus>(null);

export const useServerStatus = () => useContext(ServerStatusContext);

export const ServerStatusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [serverData, setServerData] = useState<ServerStatus>(null);

  useEffect(() => {
    fetch("/api/mc-status")
      .then((res) => res.json())
      .then((data) => setServerData(data))
      .catch((err) => console.error("Ошибка при загрузке статуса:", err));
  }, []);

  return (
    <ServerStatusContext.Provider value={serverData}>
      {children}
    </ServerStatusContext.Provider>
  );
};
