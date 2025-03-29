import React from 'react';
import styles from './GameStats.module.css';

interface GameStatsProps {
  moves: number;
  score: number;
  onRestart: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({ moves, score, onRestart }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <span>Moves: {moves}</span>
      </div>
      <div className={styles.statItem}>
        <span>Score: {score}</span>
      </div>
      <button className={styles.restartButton} onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default GameStats;