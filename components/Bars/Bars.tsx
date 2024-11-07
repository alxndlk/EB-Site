import styles from './Bars.module.css'

interface BarsProps {
    text: string;
    additionalText: string
    color: keyof typeof colors;
    valueText: string;
    mainColor: keyof typeof colors;
}

const colors = {
    green: 'text-green-500',
    yellow: 'text-yellow-500',
    red: 'text-red-500',
    blue: 'text-blue-500',
    unset: ''
};

export const Bars = ({ text, additionalText, color, valueText, mainColor }: BarsProps) => {
    return (
        <div className={styles.description}>
            <div className={`${styles.patch} ${mainColor}`}>
                {text} 
                <span className={colors[color]}>{additionalText}<span className='text-white'>{valueText}</span></span>
            </div>
        </div>
    );
}
