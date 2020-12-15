import React from 'react';
import styles from '../styles/Menu.module.scss'
import Link from "next/link";
import Sign from './Sign';

function Menu() {
    return (
        <div className={styles.container}>
            <Link href="/forests">Lasy</Link>
            <Link href="/">O nas</Link>
            <Sign/>
            <Link href="/">Poradnik</Link>
            <Link href="/">Kontakt</Link>
        </div>
    );
}

export default Menu;