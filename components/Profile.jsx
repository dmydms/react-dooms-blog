import styles from './Profile.module.scss'
import Link from 'next/Link'

export default function Profile() {
    return (
        <div className={styles.root}>
            <section className={styles.profile_section}>
                <img className={styles.profile_img} src={'/images/profile_img.jpg'} alt="Picture of the author" />
                <div className={styles.profile_desc_wrapper}>
                    <h2>doomdoom</h2>
                    <p> 안녕하세요! 풀스택 개발자 doomdoom 입니다. <br/> JavaScript, Python을 주로 사용합니다. </p>
                    <div className={styles.favorites_wrapper}>
                        <h2 className={styles.sub_title}>WHAT I LOVE</h2>
                        <ul className={styles.favorites}>
                            <li className={styles.favorites_item}>Reading 📚</li>
                            <li className={styles.favorites_item}>Coding 👩‍💻</li>
                            <li className={styles.favorites_item}>Drawing 🎨</li>
                            <li className={styles.favorites_item}>Classic 🎹</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.profile_section}>
                <h2 className={styles.sub_title}>WHO AM I</h2>
                <ul className={styles.btns_wrapper}>
                    <a target={'_blank'} href={'https://iced-farmer-712.notion.site/Full-Stack-Developer-1292017ba65e4e558213042533285032'}>
                        <li className={styles.round_btn}>Summary</li>
                    </a>
                    <a target={'_blank'} href={'https://iced-farmer-712.notion.site/Full-Stack-Developer-1292017ba65e4e558213042533285032'}>
                        <li className={styles.round_btn}>I started development as Front-end developer</li>
                    </a>
                    <a target={'_blank'} href={'https://iced-farmer-712.notion.site/Full-Stack-Developer-1292017ba65e4e558213042533285032'}>
                        <li className={styles.round_btn}>However, Back-end development is also my main task.</li>
                    </a>
                </ul>
            </section>
        </div>
    )
}
