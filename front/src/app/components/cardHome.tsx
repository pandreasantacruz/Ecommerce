import React from "react";
import styles from "../../styles/CardHome.module.css"; // Asegúrate de crear este archivo CSS en la misma carpeta

interface CardProps {
  name: string;
  image: string;
  description: string;
}

const CardHome: React.FC<CardProps> = ({ name, image, description }) => {
  console.log("CardHome");
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={image} alt={name} className={styles.image} />
          <h3 className={styles.name}>{name}</h3>
        </div>

        <div className={styles.cardBack}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
