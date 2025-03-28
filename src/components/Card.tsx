// src/components/Card.tsx

import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  character: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  character,
  image,
  isFlipped,
  isMatched,
  onClick,
}) => {
  return (
    <div
      className={`${styles.card} ${
        isFlipped || isMatched ? styles.flipped : ""
      }`}
      onClick={onClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <Image
            src="/images/fondocardmemory.jpeg"
            alt="Card Back"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.cardBack}>
          <Image
            src={image}
            alt={character}
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
