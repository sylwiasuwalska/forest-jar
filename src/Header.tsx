import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import Menu from "./Menu";

function Header() {
    return (
        <div className={styles.mainHeader}>
            <Menu />
            <Image className={styles.headerImage} src="/main.jpg" alt="me" height='1280px' width='1920px' layout="responsive"/>
            <div className={styles.headerTitle}>
                <h1>LAS</h1>
                <h2>w szkle</h2>
            </div>

        </div>
    );
}

export default Header;