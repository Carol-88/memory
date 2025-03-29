import React from "react";
import Card from "./Card";
import styles from "./GameBoard.module.css";

interface GameBoardProps {
  cards: {
    id: string;
    character: string;
    image: string;
    isMatched: boolean;
  }[];
  flippedCards: string[];
  onCardClick: (id: string) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  flippedCards,
  onCardClick,
}) => {
  return (
    <div className={styles.gameBoard}>
      {cards.map((card) => (
        <Card
          key={card.id} // Asegurar key estable
          id={card.id}
          character={card.character}
          image={card.image}
          isFlipped={flippedCards.includes(card.id) || card.isMatched}
          isMatched={card.isMatched}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
