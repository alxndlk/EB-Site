import Image from 'next/image'
import styles from './Main.module.css'

interface IServerInfo { 
    nameServer: string,
    version: string,
    mods: string,
    difficulty: string,
    wipeDate: string,
    IsOnline: boolean
    online: string,
    src: string

}

export const ServerInfo = ({ nameServer, version, mods, difficulty, wipeDate, IsOnline, online, src}:IServerInfo) => {
    return (
        <div className={styles.server}>
            <div className={styles.image}>
                <Image 
                    src={src}
                    alt='server_info'
                    width={300}
                    height={300}
                />
            </div>
            <div className={styles.server_info}>
                <h4>{nameServer}
                    {IsOnline ? (<div className={styles.badge_online}>Онлайн</div>) : <div className={styles.badge_offline}>Офлайн</div>}
                </h4>
                <div className='flex flex-col gap-2'>
                    <div className={styles.context}>
                        <p>Кол-во модов:</p><span>{mods}</span>
                    </div>
                    <div className={styles.context}>
                        <p>Сложность:</p><span>{difficulty}</span>
                    </div>
                    <div className={styles.context}>
                        <p>Версия:</p><span>{version}</span>
                        <p>Вайп:</p><span>{wipeDate}</span>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <p className='text-[#a1a1a1]'>Онлайн:</p>
                    <div className={styles.online}>{online}</div>
                </div>
            </div>
        </div>
    )
}