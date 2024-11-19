import styles from './Footer.module.css'

import Link from 'next/link';
import Image from 'next/image';
import { FaDiscord, FaTelegram, FaTiktok, FaYoutube } from 'react-icons/fa';

export const Footer = () => { 
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.content_logo}>
                    <div className={styles.logo}>
                        <Image width={24} height={24} src="/logo-top.png" alt="" className={`${styles.logoImage}`} />
                        <Link href="/" className={`${styles.link}`}>
                            Эпоха Блоков
                        </Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <h4>Ресурсы</h4>
                    <div className='flex flex-col'>
                        <Link href=''>Серверы</Link>
                        <Link href=''>Обновления</Link>
                        <Link href=''>Донат</Link>
                        <Link href=''>Дискорд</Link>
                        <Link href=''>Форум</Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <h4>Социальные сети</h4>
                    <div className='flex flex-col'>
                        <Link href=''><FaTelegram />Telegram</Link>
                        <Link href=''><FaDiscord />Discrod</Link>
                        <Link href=''><FaTiktok />TikTok</Link>
                        <Link href=''><FaYoutube />YouTube</Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <h4>Разное</h4>
                    <div className='flex flex-col'>
                        <Link href=''>Работа у нас</Link>
                        <Link href=''>Политика конфиденциальности</Link>
                        <Link href=''>Политика безопастности платежей</Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className='flex flex-col'>
                        <button>Скачать лаунчер</button>
                    </div>
                </div>
            </div>
            <div className={styles.paragraphs}>
                <p>© 2024 Эпоха Блоков. Все права защищены.</p>
                <p>NOT OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG SYNERGIES AB.</p>
            </div>  
        </footer>
    )
}