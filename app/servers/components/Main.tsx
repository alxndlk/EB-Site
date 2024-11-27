import styles from './Main.module.css'
import { ServerInfo } from './ServerInfo'
import {Update} from './Updates'

export const Main = () => {
    return (    
        <main className={styles.main}>
            <div className={styles.update_list}>
                Последние обновления
                <div className={styles.update_col}>
                    <Update 
                        modpack='Аркания'
                        title='Зимний час & крафторизация'
                        upate_v='0.3'
                        wipe={true}
                        type='Глобальный'
                        version='1.20.1'
                        date='04.11'
                    />
                    <Update 
                        modpack='Аркания'
                        title='Нужно больше энергии'
                        upate_v='0.2b'
                        wipe={false}
                        type='Патч'
                        version='1.20.1'
                        date='24.10'
                    />
                    <Update 
                        modpack='Аркания'
                        title='Драконье дело оно такое'
                        upate_v='0.2c'
                        wipe={false}
                        type='Патч'
                        version='1.20.1'
                        date='14.10'
                    />
                    <button className={styles.button} disabled>Смотреть далее...</button>
                </div>
            </div>
            <div className={styles.server_list}>
                Игровые серверы
                <div className={styles.servers}>
                    <ServerInfo 
                        src='/arcania.png'
                        nameServer='Аркания'
                        wipeDate='04.11'
                        mods='250+'
                        IsOnline={true}
                        difficulty='HARD+'
                        online='812 / 1000 ч.'
                        version='1.20.1'
                    />
                    <ServerInfo 
                        src='/technaria.png'
                        nameServer='Технария'
                        wipeDate='-- / --'
                        mods='150+'
                        IsOnline={false}
                        difficulty='MEDIUM'
                        online='На стадии разработки'
                        version='1.19.2'
                    />
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.radial}></div>
        </main>
    )
}