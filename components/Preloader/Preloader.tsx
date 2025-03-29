"use client";

import { useState, useEffect } from "react";
import styles from "./Preloader.module.css";

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Preloader;
