import React from 'react';
import styles from '../styles/Sign.module.scss';
// @ts-ignore
import Jar from '../public/jar.svg';
// @ts-ignore
import Plant from '../public/plant.svg';

function xxx() {
    return (
        <div className={styles.container}>
            <Jar className={styles.jar} />
            <Plant className={styles.plant}/>
        </div>
    );
}

export default xxx;