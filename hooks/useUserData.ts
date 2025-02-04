import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";

interface UserData {
  balance: number;
  role: string;
  skin: string;
  active: boolean;
  roleExpiresAt: Date;
}

export const useUserData = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);

  const fetchUserData = useCallback(async () => {
    if (!session) return;

    const response = await fetch("/api/user-data");
    if (response.ok) {
      const data = await response.json();
      setUserData(data);
    } else {
      console.error("Ошибка при получении данных пользователя");
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [session, fetchUserData]);

  return { userData, refetch: fetchUserData };
};
