import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'



const navigation = [
    {id: 1, title: 'Сервера', path: '/servers', target: '_self' },
    {id: 2, title: 'Обновления', path: '/updates', target: '_self' },
    {id: 3, title: 'Донат', path: '/donate', target: '_self' },
    {id: 4, title: 'Дискорд', path: 'https://discord.gg/w3ts4QTB', target: '_blank' },
    {id: 4, title: 'Форум', path: '/forum', target: '_blank',  },
]

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <li className={styles.li}>
            {
                navigation.map(({ id, title, path, target}) => (
                    <Link key={id} href={path} target={target} className={pathname === path ? styles.link_active : styles.link}>{title}</Link>
                ))
            }
        </li>
    )
}