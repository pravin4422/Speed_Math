import './TopicCard.css';

export default function TopicCard({ topic, accuracy, isSelected, onToggle, showCheckbox }) {
  return (
    <button
      className={`topic-card ${isSelected ? 'selected' : ''}`}
      onClick={onToggle}
    >
      {showCheckbox && (
        <div className="topic-checkbox">
          <div className={`checkbox ${isSelected ? 'checked' : ''}`}>
            {isSelected && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 5L4.5 8.5L11 1.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
      )}

      <div className="topic-content">
        <div className="topic-header">
          <span className="topic-name">{topic.name}</span>
          {topic.auto && <span className="auto-badge">Auto</span>}
        </div>
        {accuracy !== null && accuracy !== undefined && (
          <div className="topic-accuracy">
            <span className="accuracy-label">Last accuracy:</span>
            <span className={`accuracy-value ${accuracy >= 80 ? 'good' : accuracy >= 60 ? 'medium' : 'low'}`}>
              {accuracy.toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    </button>
  );
}
