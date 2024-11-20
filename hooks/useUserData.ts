// hooks/useUserData.ts
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface UserData {
  balance: number;
  role: string;
}

export const useUserData = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!session) return;

      setLoading(true);

      const response = await fetch('/api/user-data');
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Ошибка при получении данных пользователя');
      }

      setTimeout(() => {
        setLoading(false);
      }, 100); 
    };

    fetchUserData();
  }, [session]);

  return { userData, loading };
};
