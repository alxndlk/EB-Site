"use client";


import Features from '../Features';
import Launcher from '../Launcher';
import ModList from '../ModList';
import Mods from '../Mods';
import Optimization from '../Optimization';
import styles from './Main.module.css'; 



export const Main = () => {
    return (
        <div className={`${styles.under_main}`}>
            <Features />
            <Mods />
            <ModList />
            <Optimization />
            <Launcher />
        </div>
    );
};
