import Head from 'next/head'
import { FC } from 'react'
import NavBar from '../NavBar'
import styles from './MainLayout.module.css'

const MainLayout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - ANR</title>
            <meta name="description" content="Web site personal" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar />
    
          <main className={styles.main}>
                {children}
          </main>
        </div>
      )
}

export default MainLayout
