import { useState } from 'react';
import './ScoreRules.css';

export default function ScoreRules() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="score-rules">
      <button
        className="score-rules-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="score-rules-title">Scoring Rules</span>
        <svg
          className={`score-rules-icon ${isExpanded ? 'expanded' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="score-rules-content">
          <ul>
            <li>Easy questions: 1 point, Medium: 1.5 points, Hard: 2 points</li>
            <li>Speed bonus: 0.5x points if answered within target time</li>
            <li>Wrong answers: negative marking as per exam pattern</li>
            <li>Skipped questions: no points, no penalty</li>
          </ul>
        </div>
      )}
    </div>
  );
}
