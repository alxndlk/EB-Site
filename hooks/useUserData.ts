import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";

interface UserData {
  balance: number;
  uuid: string;
  username: string;
}

export const useUserData = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [pending, setPending] = useState<Boolean>(true);

  const fetchUserData = useCallback(async () => {
    if (!session) return;

    const response = await fetch("/api/user-data");
    if (response.ok) {
      const data = await response.json();
      setPending(false);
      setUserData(data);
    } else {
      console.error("Ошибка при получении данных пользователя");
      setPending(false);
    }
  }, [session]);

  useEffect(() => {
    fetchUserData();
  }, [session, fetchUserData]);

  return { userData, refetch: fetchUserData, pending };
};
