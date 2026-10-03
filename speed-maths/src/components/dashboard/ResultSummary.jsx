import './ResultSummary.css';

export default function ResultSummary({ result, previousResult }) {
  const formatTime = (seconds) => {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  const renderComparison = (current, previous, label, isPercentage = false, isTime = false) => {
    if (!previous) return null;
    
    const diff = current - previous;
    if (Math.abs(diff) < 0.01) return null;

    const isPositive = isTime ? diff < 0 : diff > 0;
    const displayDiff = Math.abs(diff).toFixed(2);

    return (
      <span className={`comparison ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '↑' : '↓'} {displayDiff}{isPercentage ? '%' : ''}
      </span>
    );
  };

  return (
    <div className="result-summary">
      <h3>Last attempt</h3>

      <div className="result-stats-grid">
        <div className="result-stat">
          <div className="result-stat-label">Score</div>
          <div className="result-stat-value">
            {result.score}
            {renderComparison(result.score, previousResult?.score, 'score')}
          </div>
        </div>

        <div className="result-stat">
          <div className="result-stat-label">Accuracy</div>
          <div className="result-stat-value">
            {result.accuracy}%
            {renderComparison(result.accuracy, previousResult?.accuracy, 'accuracy', true)}
          </div>
        </div>

        <div className="result-stat">
          <div className="result-stat-label">Avg Time</div>
          <div className="result-stat-value">
            {formatTime(result.avgTimeSec)}
            {renderComparison(result.avgTimeSec, previousResult?.avgTimeSec, 'time', false, true)}
          </div>
        </div>

        <div className="result-stat">
          <div className="result-stat-label">Correct / Wrong / Skipped</div>
          <div className="result-stat-value result-stat-breakdown">
            {result.correct} / {result.wrong} / {result.skipped}
          </div>
        </div>
      </div>

      {result.byTopic && result.byTopic.length > 0 && (
        <div className="result-topics">
          <h4>Performance by topic</h4>
          <div className="result-topics-table">
            <table>
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Correct</th>
                  <th>Wrong</th>
                  <th>Accuracy</th>
                  <th>Avg Time</th>
                </tr>
              </thead>
              <tbody>
                {result.byTopic.map((topic, idx) => (
                  <tr key={idx}>
                    <td className="topic-name">{topic.topic}</td>
                    <td>{topic.correct}</td>
                    <td>{topic.wrong}</td>
                    <td>{topic.accuracy}%</td>
                    <td>{formatTime(topic.avgTimeSec)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
