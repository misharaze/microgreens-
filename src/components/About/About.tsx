import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>A propos de nous</h2>
      <p>Nous cultions nos micropousses avec amour et nous n'ajoutons aucun produits chimiques  .</p>
    </section>
  );
}