import styles from './supported.module.css'
import supportedImg1 from '../assets/images/supported1.png'
import supportedImg2 from '../assets/images/supported2.png'
import supportedImg3 from '../assets/images/supported3.png'
import supportedImg4 from '../assets/images/supported4.svg'
import supportedImg5 from '../assets/images/supported5.png'
export default function SupportedBy(){
    return(
        <section className={styles.support}>  
            <h3>Supported By</h3>
            <ul>
                <li><img src={supportedImg1}/></li>
                <li><img src={supportedImg2}/></li>
                <li><img src={supportedImg3}/></li>
                <li><img src={supportedImg4}/></li>
                <li><img src={supportedImg5}/></li>
            </ul>
        </section>
    )
}