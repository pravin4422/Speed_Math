import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DailyChallengeCard.css';

export default function DailyChallengeCard({ questions, minutes, completed }) {
  const [timeUntilMidnight, setTimeUntilMidnight] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeUntilMidnight(`${hours}h ${mins}m ${secs}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="daily-challenge-card">
      <div className="daily-challenge-card__header">
        <h3 className="daily-challenge-card__title">Daily Challenge</h3>
        <span className={`daily-challenge-card__status ${completed ? 'completed' : 'not-started'}`}>
          {completed ? 'Completed' : 'Not started'}
        </span>
      </div>
      
      <p className="daily-challenge-card__details">
        {questions} questions, {minutes} minutes
      </p>
      
      <div className="daily-challenge-card__countdown">
        Resets in {timeUntilMidnight}
      </div>
      
      <Link 
        to="/dashboard/practice?mode=daily" 
        className="daily-challenge-card__button"
        aria-label={completed ? 'Retake daily challenge' : 'Start daily challenge'}
      >
        {completed ? 'Retake challenge' : 'Start challenge'}
      </Link>
    </div>
  );
}
