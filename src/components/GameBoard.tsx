import React from 'react';
import Card from './Card';
import styles from './GameBoard.module.css';
import { Card as CardType } from '../utils/gameUtils';

interface GameBoardProps {
  cards: CardType[];
  flippedCards: string[];
  onCardClick: (id: string) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, flippedCards, onCardClick }) => {
  return (
    <div className={styles.gameBoard}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          character={card.character}
          image={card.image}
          isFlipped={flippedCards.includes(card.id)}
          isMatched={card.isMatched}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;