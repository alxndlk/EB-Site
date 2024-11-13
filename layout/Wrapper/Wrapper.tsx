"use client";


import { ReactNode } from 'react';
import styles from './Wrapper.module.css'

export const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}
