import styles from './ui.module.css'

interface I_InputActive {
    width?: keyof typeof Width;
}

const Width = {
    small: '100px',
    medium: '200px',
    big: '300px',
    large: '400px',
    full: '100%'
}

export const InputActive = ({ width = 'big' }: I_InputActive) => {


    return (
        <input className={`${styles.InputActive}`} style={{ width: `${Width[width]}` }}></input>
    )
}