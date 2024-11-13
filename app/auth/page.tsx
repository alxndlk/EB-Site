import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Main from './components'

import styles from './components/Main.module.css';


const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <Header textColor='white'/>
            <Main />
            <Footer />
        </div>
    )
}

export default Auth;