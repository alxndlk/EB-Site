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
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Ошибка

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
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при подключении к серверу:", err);
        setServerData({ online: false, players: { online: 0 } }); // Если сервер офлайн, устанавливаем статус оффлайн
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return;
  }

  if (serverData?.online === false) {
    return;
  }

  return (
    <ServerStatusContext.Provider value={serverData}>
      {children}
    </ServerStatusContext.Provider>
  );
};
