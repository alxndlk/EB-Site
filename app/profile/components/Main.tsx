"use client";

import styles from './Main.module.css';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Main = () => {

    const { data: session, status } = useSession();
    const router = useRouter();
  
    if (status === "loading") {
      return <div className={styles.loading}>Загрузка...</div>;
    }
  
    if (!session) {
      router.push('/');
      return null;
    }

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

    return (
        <div className={styles.profile}>
            <h1>Добро пожаловать, {session.user?.name || "Пользователь"}!</h1>
            <p>Email: {session.user?.email}</p>
    
            <button onClick={handleSignOut} className={styles.logoutButton}>
            Выйти
            </button>
      </div>
    )
}