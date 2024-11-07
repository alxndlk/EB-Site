import styles from './Footer.module.css'

import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => { 
    return (
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <div className={styles.footer_header}>
                    <div className={styles.logo}>
                            <Image width={48} height={48} src="/logo-top.png" alt=''/>
                            <Link href="/" className={styles.link}>Эпоха Блоков</Link>
                        </div>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="/news" className={`${styles.link} relative`}>Обновления<div className={styles.circle}></div></Link>
                            </li>
                            <li>
                                <Link href="/donate" className={styles.link}>Донат</Link>
                            </li>
                            <li>
                                <Link href="https://discord.gg/w3ts4QTB" target='_blank' className={styles.link}>Дискорд</Link>
                            </li>
                            <li className={styles.gap_li}>
                            <Link  className={`${styles.button} 'bg-gray-100 rounded-full `}  passHref href='/Эпоха Блоков.exe'>
                                Начать играть
                            </Link>
                            </li>
                        </ul>
                    </div>
                <div className={styles.titles}>
                    <h1>NOT OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG SYNERGIES AB</h1>
                    <h1>© 2024 Эпоха Блоков. Все права защищены.</h1>
                </div>
            </footer>
        </div>
    )
}