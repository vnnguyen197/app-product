import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import HomePage from "./homePage";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <HomePage />
      </div>
    </div>
  );
}
