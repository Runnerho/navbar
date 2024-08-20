import { Link } from "react-router-dom";
import styles from './navList.module.css';
import { useState } from "react";

export default function NavList(){
    const [show,SetShow] = useState(false)
    return(
        <nav className={styles.navHeader}> 
            <Link to={'/aboutUs'} className={styles.link}>about-us</Link>
            <div className={styles.menu}>
                <button onClick={()=>SetShow(!show)}>all service</button>
                {show && <ul className={styles.list_of_pc}>
                    <li><Link to={'/izyRent'} className={styles.link}>izyRent</Link></li><hr/>
                    <li><Link to={'/izyProman'} className={styles.link}>izyProman</Link></li><hr/>
                    <li><Link to={'/izyPay'} className={styles.link}>izyPay</Link></li><hr/>
                    <li><Link to={'/izyFood'} className={styles.link}>izyFood</Link></li>
                </ul>}
            </div>
            {show && <ul className={styles.list_of_mob}>
                    <li><Link to={'/izyRent'} className={styles.link}>izyRent</Link></li><hr/>
                    <li><Link to={'/izyProman'} className={styles.link}>izyProman</Link></li><hr/>
                    <li><Link to={'/izyPay'} className={styles.link}>izyPay</Link></li><hr/>
                    <li><Link to={'/izyFood'} className={styles.link}>izyFood</Link></li>
                </ul>}
            <Link to={'/'} className={styles.link}>Home</Link>
        </nav>
    )
}