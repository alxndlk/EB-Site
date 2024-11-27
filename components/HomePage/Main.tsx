import { PlayCircleIcon } from 'lucide-react'
import styles from './Main.module.css'
import Image from 'next/image'

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.top_main}>
                <div className={styles.top_main_content}>
                    <video muted loop autoPlay className={styles.video} >
                        <source src="/video.mp4" type="video/mp4"  />
                    </video>
                    <div className={styles.video_overllay}/>
                    <div className={styles.video_bottom}/>
                    <div className={styles.top_main_content_title}>
                        <div className={styles.aviable}>
                            <Image 
                                src='/anvil.gif' 
                                alt='anvil'
                                width={40}
                                height={40}
                            />
                            <div className='flex flex-col items-start'>
                                <span>Эпоха Блоков</span>
                                <p>Аркания уже доступна!</p>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <h4>Лучшие сервера Minecraft с модами</h4>
                        </div>
                        <div className={styles.paragraph}>
                            <p>Добро пожаловать в мир безграничных возможностей! Исследуйте и создавайте вместе с нами.</p>
                        </div>
                        <div className={styles.links}>
                            <button className={styles.start_play}>
                                Начать играть
                            </button>
                            <a className={styles.watch_trailer}>
                                <PlayCircleIcon size={16}/>Смотреть трейлер
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.radial}></div>
                <div className={styles.light}></div>
            </div>
        </main>
    )
}