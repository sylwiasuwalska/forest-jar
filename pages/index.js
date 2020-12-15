import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from "./main";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Forests in the jar</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Main/>
            </main>

            <footer className={styles.footer}>

                {/*Icons made by {' '}<a href="https://www.flaticon.com/authors/dinosoftlabs"*/}
                {/*                 title="DinosoftLabs"> {' '}DinosoftLabs</a> from <a href="https://www.flaticon.com/"*/}
                {/*                                                               title="Flaticon"> www.flaticon.com</a>*/}

            </footer>
        </div>
    )
}
