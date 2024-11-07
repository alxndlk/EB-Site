"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Main.module.css'; 
import MainLayout from '../../components/MainLayout';
import Bars from '@/components/Bars';

export const Main = () => {

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <div className={styles.main_container_title}>
                        <div className={styles.image_container}>
                            <div className={styles.image_holder}>
                                <Image
                                    src="/minecraft_title.png"
                                    alt='Minecraft Title'
                                    width={768}
                                    quality={100}
                                    height={228.75} />
                            </div>
                        </div>
                        <div className={styles.description}>
                            < Bars 
                                text='Статус сервера:'
                                additionalText='Online'
                                color='green' valueText=''
                                mainColor='unset'/>
                            < Bars 
                                text='Игроков:'
                                additionalText='391 '
                                color='yellow'
                                valueText='/ 1000'
                                mainColor='unset'/>
                            < Bars 
                                text='Вайп:'
                                additionalText='25.10 - 31.02'
                                color='unset'
                                valueText=''
                                mainColor='unset'/>
                            < Bars 
                                text='Мир:'
                                additionalText='Бесконечный'
                                color='unset'
                                valueText=''
                                mainColor='unset'/>
                        </div>
                    </div>
                </div>
            </main>
            <MainLayout/>
        </div>
    );
};
