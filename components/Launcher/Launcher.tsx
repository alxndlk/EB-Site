import styles from './Launcher.module.css'
import press_Start_2P from '@/app';
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";

export const Launcher = () => { 
    return (
        <div className={styles.Launcher}>
            <div className={`${styles.gap_container} px-10`} id='about'>
                <h1 className={` ${press_Start_2P.className} text-slate-500 text-7xl text-left`}>НАШ ЛАУНЧЕР</h1>
                <h2>Для вашего удобства и безопастности мы создали свой лаунчер. Не забудьте создать аккаунт.</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.windows}>
                    Скачать для Windows
                </div>
                <div className={styles.ubuntu}>
                    <div className={styles.mac}>
                        <FaApple size={48}/>
                        Скачать для MacOS
                    </div>
                    <div className={styles.linux}>
                        <FaLinux size={48}/>
                        Скачать для Linux
                    </div>
                </div>
            </div>
        </div>
    )
}