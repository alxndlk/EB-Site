"use client";

import Features from '../Features';
import ModList from '../ModList';
import Mods from '../Mods';
import Optimization from '../Optimization';
import styles from './MainLayout.module.css'; 



export const MainLayout = () => {
    return (
        <div className={`${styles.under_main}`}>
            <Features />
            <Mods />
            <ModList />
            <Optimization />
        </div>
    );
};
