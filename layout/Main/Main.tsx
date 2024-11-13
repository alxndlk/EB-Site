"use client";

import React from 'react';
import styles from './Main.module.css'; 
import Main from '@/components/Main';

export const MainLayout = () => {

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.main_container}>
                    
                </div>
            </main>
            <Main />
        </div>
    );
};
