import { Link } from 'react-router-dom';
import './WeakTopics.css';

export default function WeakTopics({ topics }) {
  if (!topics || topics.length === 0) {
    return (
      <div className="weak-topics">
        <h3 className="weak-topics__title">Topics to Improve</h3>
        <div className="weak-topics__empty">
          <p>No weak topics yet. Keep practicing!</p>
          <Link to="/dashboard/practice" className="weak-topics__empty-button">
            Start practicing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="weak-topics">
      <h3 className="weak-topics__title">Topics to Improve</h3>
      <div className="weak-topics__list">
        {topics.map((topic, index) => (
          <div key={index} className="weak-topics__item">
            <div className="weak-topics__item-header">
              <span className="weak-topics__item-name">{topic.name}</span>
              <span className="weak-topics__item-accuracy">{topic.accuracy}%</span>
            </div>
            <div className="weak-topics__item-bar">
              <div 
                className="weak-topics__item-fill" 
                style={{ width: `${topic.accuracy}%` }}
              />
            </div>
            <Link 
              to={`/dashboard/practice?topic=${encodeURIComponent(topic.name)}`}
              className="weak-topics__item-button"
              aria-label={`Practice ${topic.name}`}
            >
              Practice
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
