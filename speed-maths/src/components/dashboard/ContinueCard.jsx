import { Link } from 'react-router-dom';
import './ContinueCard.css';

export default function ContinueCard({ topic, difficulty, progressPct }) {
  const difficultyColors = {
    easy: 'success',
    medium: 'warning',
    hard: 'error'
  };

  return (
    <div className="continue-card">
      <h3 className="continue-card__title">Continue Learning</h3>
      
      <div className="continue-card__topic">{topic}</div>
      
      <span className={`continue-card__difficulty ${difficultyColors[difficulty]}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
      
      <div className="continue-card__progress">
        <div className="continue-card__progress-bar">
          <div 
            className="continue-card__progress-fill" 
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="continue-card__progress-text">{progressPct}% complete</span>
      </div>
      
      <Link 
        to="/dashboard/practice" 
        className="continue-card__button"
        aria-label={`Continue practicing ${topic}`}
      >
        Continue
      </Link>
    </div>
  );
}
