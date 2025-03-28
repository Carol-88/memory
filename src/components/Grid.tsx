// src/components/Grid.tsx

import React from "react";
import Card from "./Card";
import styles from "./Grid.module.css";

interface GridProps {
  characters: { character: string; image: string }[];
  flippedCards: number[];
  matchedCards: number[];
  onCardClick: (index: number) => void;
}

const Grid: React.FC<GridProps> = ({
  characters,
  flippedCards,
  matchedCards,
  onCardClick,
}) => {
  return (
    <div className={styles.grid}>
      {characters.map((card, index) => (
        <Card
          key={index}
          character={card.character}
          image={card.image}
          isFlipped={flippedCards.includes(index)}
          isMatched={matchedCards.includes(index)}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
