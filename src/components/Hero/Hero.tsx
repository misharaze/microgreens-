import React from "react";
import styles from "./Hero.module.css";
//import logo from "../assets/logo.png";
//<img src={logo} alt="GreenFresh" className={styles.logo} />

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <header className={styles.logoContainer}>
        
      </header>
      <div className={styles.content}>
        <h1 className={styles.title}>Micro-pousses a porter de main</h1>
        <p className={styles.subtitle}>La fraicheur, que vous pouvez sentir. le gout, que vous pouvez ressentir.</p>
        <a href="#order" className={styles.cta}>
          Commander
        </a>
      </div>
    </section>
  );
}