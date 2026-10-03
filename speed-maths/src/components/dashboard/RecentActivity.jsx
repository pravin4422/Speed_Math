import { Link } from 'react-router-dom';
import './RecentActivity.css';

function formatRelativeTime(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return `${diffMins} min ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function RecentActivity({ attempts }) {
  if (!attempts || attempts.length === 0) {
    return (
      <div className="recent-activity">
        <h3 className="recent-activity__title">Recent Activity</h3>
        <div className="recent-activity__empty">
          <p>No recent activity. Start your first practice session!</p>
          <Link to="/dashboard/practice" className="recent-activity__empty-button">
            Start practicing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recent-activity">
      <h3 className="recent-activity__title">Recent Activity</h3>
      <div className="recent-activity__list">
        {attempts.map((attempt, index) => (
          <div key={index} className="recent-activity__item">
            <div className="recent-activity__item-header">
              <span className="recent-activity__item-topic">{attempt.topic}</span>
              <span className="recent-activity__item-time">{formatRelativeTime(attempt.date)}</span>
            </div>
            <div className="recent-activity__item-stats">
              <span className="recent-activity__item-stat">
                Score: <strong>{attempt.score}</strong>
              </span>
              <span className="recent-activity__item-stat">
                Accuracy: <strong>{attempt.accuracy}%</strong>
              </span>
              <span className="recent-activity__item-stat">
                Time: <strong>{formatTime(attempt.timeSec)}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
