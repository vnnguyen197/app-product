import Head from 'next/head'
import Content from '../components/content/components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}
