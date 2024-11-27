"use client";

import styles from './Features.module.css'
import press_Start_2P from '@/app';

export const Features = () => {
    return (
        <div className={styles.container_features}>
            <div className={`${styles.gap_container} px-10`} id='about'>
                <h1 className={` ${press_Start_2P.className} text-blue-600 text-7xl text-left`}>АРКАНИЯ 1.20.1</h1>
                <h2>Чтобы оставаться на волне современных обновлений, мы перешли на Minecraft версии 1.20.1.</h2>
            </div>
            <div className={`${styles.content} flex-row`}>
                <div className={styles.text_1}>
                    <h3 className={` ${press_Start_2P.className} text-blue-600`}>УНИКАЛЬНАЯ ГЕНЕРАЦИЯ</h3>
                    <h4>Мы внесли изменения в уникальные моды, которые отвечают за генерацию, обновив их для расширения возможностей и улучшения игрового опыта.</h4>
                </div>
                <div className={`${styles.image_1} bg-[url('/image(3).png')]`} />
            </div>
            <div className={`${styles.content} flex-row-reverse`}>
                <div className={styles.text_1} >
                    <h3 className={` ${press_Start_2P.className} text-blue-600`}>НОВЫЕ ПЕЩЕРЫ</h3>
                    <h4>Мы добавили новые, уникальные пещеры, которые создадут ещё больше захватывающих возможностей для исследований.</h4>
                </div>
                <div className={`${styles.image_1} bg-[url('/image.png')]`} />
            </div>
            <div className={`${styles.content} flex-row`}>
                <div className={styles.text_1}>
                    <h3 className={` ${press_Start_2P.className} text-blue-600`}>БЕСКОНЕЧНЫЕ ПОСТРОЙКИ</h3>
                    <h4>
                    Тысячи различных построек и данжей, которые заново создаются когда их зачистили, делая мир ещё более живым. Лута хватит на всех!</h4>
                </div>
                <div className={`${styles.image_1} bg-[url('/image(2).png')]`} />
            </div>
            <div className={`${styles.content} flex-row-reverse`}>
                <div className={styles.text_1} >
                    <h3 className={` ${press_Start_2P.className} text-blue-600`}>1000+ КВЕСТОВ</h3>
                    <h4>Огромное разнообразие заданий, которые добавят в игру новые вызовы и помогут полностью погрузиться в мир приключений.</h4>
                </div>
                <div className={`${styles.image_12} bg-[url('/quest.png')]`} />
            </div>
        </div>
    )
}