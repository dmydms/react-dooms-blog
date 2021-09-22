import Head from 'next/head'
import styles from './Header.module.scss'
import Profile from './Profile'

export default function Header() {

    return (
        <>
            <div className={styles.header_container}>
                <Head>
                    <title>DOOM's DEV WORLD</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <heaer className={styles.header}>
                    <h1>{`DOOM's DEV WORLD`}</h1>
                </heaer>
                <Profile />
            </div>
        </>
    )
}
