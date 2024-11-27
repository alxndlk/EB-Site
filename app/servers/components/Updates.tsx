import styles from './Main.module.css'

interface IUpdate {
    title?: string,
    type?: string,
    modpack?: string,
    date?: string,
    version?: string,
    upate_v?: string,
    wipe?: boolean
}

export const Update = ({ title, type, modpack, date, version, upate_v, wipe }: IUpdate) => {
    return (
        <div className={styles.update}>
            <div className={styles.update_top}>
                <div className='flex flex-row items-center gap-4'>
                    {modpack && (<p>{modpack}</p>)}
                    {type && (<span>{type}</span>)}
                    {wipe && <span>Вайп</span>}
                    {version && (<span>{version}</span>)}
                </div>
                {date && (<span>{date}</span>)}
            </div>
            <div className={styles.update_bottom}>
                {title && (<h4>{title}</h4>)}
                {upate_v && (<span>{upate_v}</span>)}
            </div>
        </div>
    )
}