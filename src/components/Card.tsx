import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  id: string;
  character: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  character,
  image,
  isFlipped,
  isMatched,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isMatched) onClick(id);
  };

  return (
    <div
      className={`${styles.card} ${
        isFlipped || isMatched ? styles.flipped : ""
      }`}
      onClick={handleClick}
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

Card.displayName = "Card";

export default Card;
