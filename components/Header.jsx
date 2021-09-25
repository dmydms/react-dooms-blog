import Head from 'next/head'
import styles from './Header.module.scss'
import Profile from './Profile'

export default function Header() {
    return (
        <>
            <Head>
                <title>DOOM's DEV WORLD</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
                <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"/>
            </Head>
            <div className={styles.header_container}>
                <header className={styles.header}>
                    <h1>{`DOOM's DEV WORLD`}</h1>
                </header>
                <Profile />
            </div>
        </>
    )
}
