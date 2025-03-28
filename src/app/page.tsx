// src/app/page.tsx

"use client";
import Grid from "../components/Grid";
import { useGameLogic } from "../utils/gameLogic";
import styles from "./page.module.css";

export default function Home() {
  const {
    shuffledCharacters,
    flippedCards,
    matchedCards,
    isGameComplete,
    handleCardClick,
    handleRestartGame,
  } = useGameLogic();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Memory Game</h1>
      <div className={styles.glassBoard}>
        <Grid
          characters={shuffledCharacters}
          flippedCards={flippedCards}
          matchedCards={matchedCards}
          onCardClick={handleCardClick}
        />
      </div>

      {isGameComplete && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>¡Lo conseguiste!</h2>
            <button onClick={handleRestartGame}>Volver a empezar</button>
          </div>
        </div>
      )}
    </main>
  );
}
