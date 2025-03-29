import { useEffect, useState } from 'react';
import { Card, createGameCards } from './gameUtils';

export const useGameLogic = () => {
  const [cards, setCards] = useState<Card[]>(() => createGameCards());
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard?.character === secondCard?.character) {
        // Match found
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              flippedCards.includes(card.id) ? { ...card, isMatched: true } : card
            )
          );
          setScore(prev => prev + 1); // Increment score by 1 for each match
          setFlippedCards([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  const handleCardClick = (cardId: string) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(cardId) &&
      !cards.find(card => card.id === cardId)?.isMatched
    ) {
      setFlippedCards(prev => [...prev, cardId]);
    }
  };

  const handleRestartGame = () => {
    setCards(createGameCards());
    setFlippedCards([]);
    setMoves(0);
    setScore(0);
  };

  const isGameComplete = cards.every(card => card.isMatched);

  return {
    cards,
    flippedCards,
    moves,
    score,
    isGameComplete,
    handleCardClick,
    handleRestartGame,
  };
};