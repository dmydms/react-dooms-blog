import styles from './TIL.module.scss'
import { useState } from 'react'

export default function TIL() {
    const [curCellIndex, setCurCellIndex] = useState(0)
    const CellContents = [{
        'title': '2021-09-01 TIL',
        'summary': 'blahblah',
        'path': '/til/2021-09-01',
    },{
        'title': '2021-09-02 TIL',
        'summary': 'blahblah2',
        'path': '/til/2021-09-02',
    },{
        'title': '2021-09-03 TIL',
        'summary': 'blahblah3',
        'path': '/til/2021-09-03',
    },{
        'title': '2021-09-04 TIL',
        'summary': 'blahblah4',
        'path': '/til/2021-09-04',
    },{
        'title': '2021-09-04 TIL',
        'summary': 'blahblah4',
        'path': '/til/2021-09-04',
    },]

    const carouselCells = CellContents.map((content, i) => (
        <div key={i}
            className={styles.carousel_cell}>
            {content.title}<br/>
            {content.summary}<br/>
            {content.path}
        </div>
    ))

    console.log(carouselCells)
    return (
        <div className={styles.root}>
            <h2>TIL</h2>
            <div className={styles.carousel_wrapper}>
                <div className={styles.carousel}>
                    {carouselCells}
                </div>

                <div className={styles.carousel_left_btn}></div>
                <div className={styles.carousel_right_btn}></div>
            </div>
        </div>
    )
}