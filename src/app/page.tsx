// src/app/page.tsx

"use client";
import GameBoard from "../components/GameBoard";
import GameStats from "../components/GameStats";
import { useGameLogic } from "../utils/gameLogic";
import styles from "./page.module.css";

export default function Home() {
  const {
    cards,
    flippedCards,
    moves,
    score,
    isGameComplete,
    handleCardClick,
    handleRestartGame,
  } = useGameLogic();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Memory Game</h1>
      
      <GameStats 
        moves={moves}
        score={score}
        onRestart={handleRestartGame}
      />

      <div className={styles.glassBoard}>
        <GameBoard
          cards={cards}
          flippedCards={flippedCards}
          onCardClick={handleCardClick}
        />
      </div>

      {isGameComplete && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>¡Congratulations!</h2>
            <p>Score: {score}</p>
            <p>Moves: {moves}</p>
            <button 
              className={styles.restartButton}
              onClick={handleRestartGame}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
