import React from "react";
import styles from "./Products.module.css";
import product1 from "../../img/petit-pois.jpg";
import product2 from "../../img/tournesol.jpg";
import product3 from "../../img/micro-pousse-brocoli.jpg";
import product4 from "../../img/micro-pousse-radis-daikon.jpg";
import product5 from "../../img/cresson.jpg";
import product6 from "../../img/basilic.jpg";
import product7 from "../../img/micro-pousse amarante.jpg";
import product8 from "../../img/coriandre.jpg";
import product9 from "../../img/mixmicropousse.jpg";
import product10 from "../../img/blé.jpg";

const products = [
  { id: 1, title: "Pois", desc: "Croquant, frais, riche en vitamines", price: "11€", image: product1 },
  { id: 2, title: "Tournesol", desc: "Goût intense, source de vitamine E", price: "10 €", image: product2 },
  { id: 3, title: "Brocoli", desc: "Goût délicat, propriétés antioxydantes", price: "10€", image: product3 },
  { id: 4, title: "Radis", desc: "Goût piquant, énergisant", price: "10€", image: product4 },
  { id: 5, title: "Cresson", desc: "Piquant, parfait en accompagnement", price: "10€", image: product5 },
  { id: 6, title: "Basilic", desc: "Arôme frais et rafraîchissant", price: "11€", image: product6 },
  { id: 7, title: "Amarante", desc: "Couleur vive, riche en protéines", price: "10€", image: product7 },
  { id: 8, title: "Coriandre", desc: "Saveur emblématique de la cuisine orientale", price: "10€", image: product8 },
  { id: 9, title: "Mélange de verdure", desc: "Un mélange idéal de saveurs", price: "10€", image: product9 },
  { id: 10, title: "Blé", desc: "Idéal pour détoxifier l’organisme", price: "10€", image: product10 },
];

export default function Products() {
  return (
    <section className={styles.products}>
      <h2>Nos produits</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
