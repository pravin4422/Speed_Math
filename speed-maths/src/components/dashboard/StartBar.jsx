import { useNavigate } from 'react-router-dom';
import './StartBar.css';

export default function StartBar({ mode, difficulty, selectedTopics, duration }) {
  const navigate = useNavigate();

  const getDifficultyLabel = () => {
    const labels = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
    return labels[difficulty] || 'Easy';
  };

  const getModeLabel = () => {
    const labels = { topic: 'Topic-wise', mixed: 'Mixed', timed: 'Timed test' };
    return labels[mode] || 'Topic-wise';
  };

  const handleStart = () => {
    if (selectedTopics.length === 0) return;

    const params = new URLSearchParams({
      mode,
      difficulty,
      topics: selectedTopics.join(',')
    });

    if (mode === 'timed') {
      params.append('duration', duration.toString());
    }

    navigate(`/dashboard/practice/session?${params.toString()}`);
  };

  return (
    <div className="start-bar">
      <div className="start-bar-content">
        <div className="start-summary">
          <div className="summary-item">
            <span className="summary-label">Mode:</span>
            <span className="summary-value">{getModeLabel()}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Difficulty:</span>
            <span className="summary-value">{getDifficultyLabel()}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Topics:</span>
            <span className="summary-value">{selectedTopics.length}</span>
          </div>
          {mode === 'timed' && (
            <div className="summary-item">
              <span className="summary-label">Duration:</span>
              <span className="summary-value">
                {duration >= 60 ? `${duration / 60} min` : `${duration} s`}
              </span>
            </div>
          )}
        </div>

        <button
          className="start-btn"
          onClick={handleStart}
          disabled={selectedTopics.length === 0}
        >
          {selectedTopics.length === 0 ? (
            <span className="start-btn-text">
              Select at least one topic
            </span>
          ) : (
            <span className="start-btn-text">Start Practice</span>
          )}
        </button>
      </div>
    </div>
  );
}
