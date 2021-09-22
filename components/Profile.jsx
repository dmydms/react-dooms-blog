import styles from './Profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.root}>
            <img className={styles.profile_img} src={'/images/profile_img.jpg'} alt="Picture of the author" />
            <div className={styles.profile_desc_wrapper}>
                <h2>doomdoom</h2>
                <p>그림 그리기 🎨, 클래식 듣기 🎻 를 좋아하는 <br/>관심사가 다채로운 풀스택 개발자 doomdoom 입니다. </p>
                <ul>
                    <li><a href={'https://twitter.com/doomydoomydooms'} target={'_blank'}>TWITTER&nbsp;&nbsp;&nbsp;</a></li>
                    <li><a href={'https://doomydoomydooms.medium.com/'} target={'_blank'}>BLOG&nbsp;&nbsp;&nbsp;</a></li>
                </ul>
            </div>
        </div>
    )
}