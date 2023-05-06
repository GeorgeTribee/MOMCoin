import React, { useState } from 'react'
import styles from './styles.module.css'
import image from '../../assets/momLogo.png'
import shirtSVG from '../../assets/headerlogo/shirt-solid.svg'
import togglerSVG from '../../assets/headerlogo/theme-toggler.svg'
import englandSVG from '../../assets/headerlogo/england.svg'
import hamburgerLogo from './hamburger.svg'

const Header = () => {
  const [dogopedia, setDogopedia] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href='muskonmars.xyz'>
          <img src={image}/>
          <span>MuskOnMars</span>
        </a>
      </div>
      <div className={styles.navigation}>
        <nav>
        <ul className={styles.navigation__leftside}>
          <li><a href='#'>So Home</a></li>
          <li><a href='#aboutMuskOnMars'>What is MOM?</a></li>
          <li><a href='#howToBuy'>How to buy?</a></li>
          <li><a href='#community'>Very Community</a></li>
          <li className={styles.dogopedia}>
            <a className={styles.dogShow} href='#'>So MOM
              <div className={styles.show}>
                <p><a href='#FAQ'>FAQ</a></p>
                <p><a href='https://muskonmars.gitbook.io/muskonmars-mom/?fbclid=IwAR2SRIZsZ6IqyENb1XD158eKiqh8cDOTN-T_KrSMxyac4FGeMsBAYMC1jIU' target='_blank'>Whitepaper</a></p>
              </div>
            </a>
            <span>▾</span>
          </li>
        </ul>
        <div className={styles.hamburger}>
          <img src={hamburgerLogo}/>
        </div>
        </nav>
      </div>
    </div>
  )
}

export default Header