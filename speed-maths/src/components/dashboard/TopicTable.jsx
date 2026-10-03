import './TopicTable.css';

export default function TopicTable({ topics }) {
  const getStatusClass = (status) => {
    if (status === 'On target') return 'status-success';
    if (status === 'Slow') return 'status-warning';
    if (status === 'Weak') return 'status-danger';
    return '';
  };

  return (
    <div className="topic-table-container">
      <table className="topic-table desktop-table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Attempts</th>
            <th>Accuracy</th>
            <th>Avg Time</th>
            <th>Target Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index}>
              <td className="topic-name">{topic.topic}</td>
              <td>{topic.attempts}</td>
              <td className="accuracy-cell">{topic.accuracy}%</td>
              <td>{topic.avgTime}s</td>
              <td>{topic.targetTime}s</td>
              <td>
                <span className={`status-chip ${getStatusClass(topic.status)}`}>
                  {topic.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile view */}
      <div className="topic-table-mobile">
        {topics.map((topic, index) => (
          <div key={index} className="topic-mobile-item">
            <div className="topic-mobile-header">
              <div className="topic-mobile-name">{topic.topic}</div>
              <span className={`status-chip ${getStatusClass(topic.status)}`}>
                {topic.status}
              </span>
            </div>
            <div className="topic-mobile-stats">
              <div className="topic-mobile-stat">
                <span className="topic-stat-label">Attempts:</span>
                <span className="topic-stat-value">{topic.attempts}</span>
              </div>
              <div className="topic-mobile-stat">
                <span className="topic-stat-label">Accuracy:</span>
                <span className="topic-stat-value">{topic.accuracy}%</span>
              </div>
              <div className="topic-mobile-stat">
                <span className="topic-stat-label">Avg Time:</span>
                <span className="topic-stat-value">{topic.avgTime}s</span>
              </div>
              <div className="topic-mobile-stat">
                <span className="topic-stat-label">Target:</span>
                <span className="topic-stat-value">{topic.targetTime}s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
