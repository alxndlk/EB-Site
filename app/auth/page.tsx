import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Main from './components'

import styles from './components/Main.module.css';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Auth = async () => {

    const session = await getServerSession(authOptions);

    if(session) redirect('/profile');

    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Auth;