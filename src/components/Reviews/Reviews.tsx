import React from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <h2>Avis clients</h2>
      <blockquote>
        "Exellentes micropousses! je suis satisfaite de la qualités du produits commander, coresspond parfaitement à mes attentes."
      </blockquote>
      <cite>— Lucie, Paris</cite>
    </section>
  );
}