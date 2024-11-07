"use client";

import styles from './Mods.module.css'
import press_Start_2P from '@/app';

export const Mods = () => {

    return (
        <div className={styles.gap}>
            <div className={`${styles.gap_container} px-10`}>
                <h1 className={` ${press_Start_2P.className} text-yellow-500 mt-24 text-7xl text-left`}>НОВЫЕ МОДЫ</h1>
                <h2>
                С выходом новой версии стало возможным внедрить массу оригинальных модификаций, которые принесут больше разнообразия в игровой процесс.</h2>
            </div>

            <div className={styles.mod_container}>
                <div className={`${styles.mod_content} bg-[url('/avaritia.png')]`} >
                    <h1 className={` ${press_Start_2P.className} text-yellow-500`}>
                    AVARITIA
                    </h1>
                    <h2 className='text-black'>
                    Вместе с множеством нового контента, чтобы расширить игровые возможности.
                    </h2>
                </div>
                <div className={`${styles.mod_content_1} bg-[url('/botania.png')]`} >
                    <h1 className={` ${press_Start_2P.className} text-yellow-500`}>
                    BOTANIA
                    </h1>
                    <h2>
                    Элементы магии природы и механики, обогащающие игровой процесс.
                    </h2>
                </div>
                <div className={`${styles.mod_content} bg-[url('/draconic.png')]`} >
                    <h1 className={` ${press_Start_2P.className} text-yellow-500`}>
                    DRACONIC EVOLUTION
                    </h1>
                    <h2>
                    Мощные технологии, артефакты драконов и уникальное оборудование.
                    </h2>
                </div>
                <div className={`${styles.mod_content_2} bg-[url('/ae2.png')]`} >
                    <h1 className={` ${press_Start_2P.className} text-yellow-500`}>
                    GREG TECH & AE2
                    </h1>
                    <h2>
                    Моды, усложняющие технический прогресс Minecraft
                    </h2>
                </div>
                <div className={`${styles.mod_content_2} bg-[url('/adastra.png')]`} >
                    <h1 className={` ${press_Start_2P.className} text-yellow-500`}>
                    AD ASTRA
                    </h1>
                    <h2>
                    Отправляйтесь в космос, исследуйте планеты, добывайте внеземные ресурсы.
                    </h2>
                </div>
                <div className={`${styles.mod_content} bg-[url('/divinerpg.png')]`} >
                    <h1 className={` ${press_Start_2P.className} text-yellow-500`}>
                    DIVINE RPG
                    </h1>
                    <h2>
                    Множество новых измерений, боссов, уникальных мобов и мощного снаряжения.
                    </h2>
                </div>
            </div>
        </div>
    )
}
