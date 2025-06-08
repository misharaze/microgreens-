import React from "react";
import styles from "./OrderForm.module.css";

export default function OrderForm() {
  return (
    <section className={styles.form} id="order">
      <h2>Passer commande</h2>
      <form>
        <input type="text" placeholder="Votre nom " />
        <input type="text" placeholder="téléphone" />
        <textarea placeholder="Commentaires ou suggestion sur le mode d'envoie" />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
