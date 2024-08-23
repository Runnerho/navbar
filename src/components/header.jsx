import NavList from "./navList";
import styles from './header.module.css';
import image from '../assets/images/logo.png';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Header(){
    const [right,SetRight] = useState('-100vw')
    const [menuShow,SetMenuShow] = useState(0)
    const [show,SetShow] = useState('0')

    const handleTranslate = ()=>{
        if(right === '-100vw'){
            SetRight('0')
            SetShow('100vh')
            SetMenuShow('100vh')
        }else{
            SetRight('-100vw')
            SetShow('0')
            SetMenuShow(0)
        }
    }

    return(
        <header className={styles.header}>
            <div className={styles.dark_highlight} style={{height:show}} onClick={handleTranslate}></div>
            <img src={image}/>
            <div onClick={handleTranslate} className={styles.icon_menu}><GiHamburgerMenu/></div>
            <div className={styles.pc_mode}>
                <NavList/>
                <div className={styles.log_sign}>
                    <button className={styles.login}>login</button>
                    <button className={styles.signup}>sign up</button>
                </div>
            </div>
            <div className={styles.mobile_mode} style={{right:right,height:menuShow}}>
                <div className={styles.closer} onClick={handleTranslate}><ImCross/></div>
                <NavList/>
                <div className={styles.log_sign}>
                    <button className={styles.login}>login</button>
                    <button className={styles.signup}>sign up</button>
                </div>
            </div>
        </header>
    )
}