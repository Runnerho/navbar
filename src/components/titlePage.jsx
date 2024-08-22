import { useEffect, useState } from 'react'
import styles from './titlePage.module.css'

export default function TitlePage({Children,imageSource,width,height,bgcolor,dir,highlightColor}){
    const [flexDir,SetFlexDir] = useState(dir)
    useEffect(()=>{
        if(window.screen.availWidth>= 768){
            SetFlexDir(dir)
        }else{
            SetFlexDir('column')
        }
        console.log(window.screen);
    },[])
    
    return(
        <section className={styles.title_of_page} style={{backgroundColor: bgcolor , flexDirection: flexDir}}>
            <div className={styles.text}>{Children}</div>
            <div className={styles.image} style={{width:width,height:height,backgroundColor:highlightColor}}>
                <img src={imageSource} />
            </div>
        </section>
    )
}