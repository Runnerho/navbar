import { Children } from 'react';
import styles from './titlePage.module.css'

export default function TitlePage({Children,imageSource,width,height,bgcolor,dir,highlightColor}){
    return(
        <section className={styles.title_of_page} style={{backgroundColor: bgcolor , flexDirection: dir}}>
            <div className={styles.text}>{Children}</div>
            <div className={styles.image} style={{width:width,height:height,backgroundColor:highlightColor}}>
                <img src={imageSource} />
            </div>
        </section>
    )
}