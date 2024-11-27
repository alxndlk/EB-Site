import styles from './ModList.module.css'

interface ModOptions {
    text: string;
    description: string
    color: keyof typeof colors;
}

const colors = {
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
    blue: 'bg-indigo-600',
    green: 'bg-green-600',
    unset: ''
};

export const ModComponent = ({ text, description, color,  }: ModOptions) => {
    return (
        <div className={styles.mod_component}>
            <div className={styles.name}>
                <div className={`${styles.name_container} ${colors[color]}`}>
                    {text}
                </div>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}