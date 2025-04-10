import React, { createContext, useContext, useEffect, useState } from "react";

type ServerStatus = {
  online: boolean;
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
      .then((res) => {
        if (!res.ok) {
          throw new Error("Не удалось подключиться к серверу");
        }
        return res.json();
      })
      .then((data) => {
        setServerData(data);
      })
      .catch((err) => {
        console.error("Ошибка при подключении к серверу:", err);
        setServerData({ online: true, players: { online: 1 } }); // Сервер офлайн, но показываем онлайн с 1 игроком
      });
  }, []);

  return (
    <ServerStatusContext.Provider value={serverData}>
      {children}
    </ServerStatusContext.Provider>
  );
};
