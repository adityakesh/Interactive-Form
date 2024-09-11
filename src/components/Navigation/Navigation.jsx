import React from 'react'
import styles from './Navigation.module.css'
export default function Navigation() {

  console.log(styles)
  return (
    <>
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src='/images/Frame 2 1.png' alt='Do some coding log'/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
  )
}
