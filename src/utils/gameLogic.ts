// src/utils/gameLogic.ts

import { useEffect, useMemo, useState } from 'react';
import { characters, shuffleArray } from './gameUtils';

export const useGameLogic = () => {
  const shuffledCharacters = useMemo(() => shuffleArray(characters), [characters]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  useEffect(() => {
  if (flippedCards.length === 2) {
    const [firstIndex, secondIndex] = flippedCards;
    if (
      shuffledCharacters[firstIndex].character ===
      shuffledCharacters[secondIndex].character
    ) {
      setMatchedCards((prevMatched) => [...prevMatched, firstIndex, secondIndex]);
      setFlippedCards([]); // Limpiar flippedCards para permitir nuevas selecciones
    } else {
      setTimeout(() => {
        setFlippedCards([]); // Volver a voltear las cartas si no coinciden
      }, 1000);
    }
  }
}, [flippedCards, shuffledCharacters]);


  const handleCardClick = (index: number) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleRestartGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const isGameComplete = matchedCards.length === shuffledCharacters.length;

  return {
    shuffledCharacters,
    flippedCards,
    matchedCards,
    isGameComplete,
    handleCardClick,
    handleRestartGame,
  };
};