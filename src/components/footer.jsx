import styles from './footer.module.css';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <>

            <footer>
                <div className={styles.titles}>
                    <img src={logo}/>
                    <p>you can save towards your rent and reduce your cost of living by joining liveizy community today.</p>
                </div>
                <div className={styles.menu}>
                    <div className={styles.details}>
                        <h3>company</h3>
                        <ul>
                            <li>Services</li>
                            <li>Call 09904893539</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className={styles.details}>
                        <h3>company</h3>
                        <ul>
                            <li><Link to={'/izyRent'} className={styles.link}>izyRent</Link></li>
                            <li><Link to={'/izyFood'} className={styles.link}>izyFood</Link></li>
                            <li><Link to={'/izyPay'} className={styles.link}>izyPay</Link></li>
                            <li><Link to={'/izyProman'} className={styles.link}>izyProman</Link></li>
                        </ul>
                    </div>
                    <div className={styles.details}>
                        <h3>contact</h3>
                        <ul>
                            <li style={{textAlign:"center",width:'60%'}}>9a church street, off hospital road, Gbagada</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.copy}>© copyright 2024 by animalism.com</div>
        </>
    )
}