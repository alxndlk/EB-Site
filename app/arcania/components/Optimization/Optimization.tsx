import press_Start_2P from '@/app'
import styles from './Optimization.module.css'

export const Optimization = () => {
    return (
        <div className={styles.gap}>
            <div className={`${styles.gap_container} px-10`}>
                <h1 className={` ${press_Start_2P.className} text-green-500 mt-24 text-left text-7xl`}>ОПТИМИЗАЦИЯ</h1>
                <h2>
                Мы позаботились о вашей игре. Вам не нужно беспокоиться о графике или загрузке ресурсов — всё уже оптимизировано для плавного игрового процесса.</h2>
            </div>
            <div className={styles.container_features}>
                <div className={styles.recommendations}>
                    <div className={`${styles.content_2} flex-row`}>
                        <h3 className={` ${press_Start_2P.className} text-red-500`}>МИНИМАЛЬНЫЕ ТРЕБОВАНИЯ</h3>
                        <div className={styles.spans}>
                            <span>Операционная система: <span className={styles.small}>Windows 10/11.</span></span>
                            <span>Процессор: <span className={styles.small}>Intel Core i3 или аналогичный.</span></span>
                            <span>Оперативная память: <span className={styles.small}>4 ГБ RAM.</span></span>
                            <span>Видеокарта: <span className={styles.small}>NVIDIA GTX 660 или аналогичная.</span></span>
                            <span>Место на диске: <span className={styles.small}>5 ГБ свободного места.</span></span>
                            <span>Java: <span className={styles.small}>Версия 8 или выше.</span></span>
                        </div>
                    </div>
                    <div className={`${styles.content_2} flex-row`}>
                        <h3 className={` ${press_Start_2P.className} text-yellow-500`}>РЕКОМЕНДОВАННЫЕ ТРЕБОВАНИЯ</h3>
                        <div className={styles.spans}>
                            <span>Операционная система: <span className={styles.small}>Windows 10/11.</span></span>
                            <span>Процессор: <span className={styles.small}>Intel Core i5 / AMD Ryzen 5 или выше.</span></span>
                            <span>Оперативная память: <span className={styles.small}>8 ГБ RAM.</span></span>
                            <span>Видеокарта: <span className={styles.small}>NVIDIA GTX 1060 / Radeon RX 580 или выше.</span></span>
                            <span>Место на диске: <span className={styles.small}>5 ГБ свободного места.</span></span>
                            <span>Java: <span className={styles.small}>Версия 8 или выше.</span></span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.content} flex-row-reverse`}>
                    <div className={styles.text_1} >
                        <h3 className={` ${press_Start_2P.className} text-green-500`}>ГИБКОСТЬ</h3>
                        <h4>Не волнуйтесь о кадрах в секунду — настройки можно адаптировать под любую систему.</h4>
                    </div>
                    <div className={styles.image_content}>
                        <div className={`${styles.image_fps} bg-[url('/fps.png')]`} />
                    </div>
                </div>
            </div>
        </div>
    )
}