import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} GreenFresh. Tout droits réservés.</p>
    </footer>
  );
}