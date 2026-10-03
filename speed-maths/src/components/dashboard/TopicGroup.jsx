import './TopicGroup.css';
import TopicCard from './TopicCard';

export default function TopicGroup({ 
  group, 
  topics, 
  selectedTopics, 
  onTopicToggle, 
  mode,
  showSelectAll,
  onSelectAll 
}) {
  const showCheckbox = mode === 'mixed' || mode === 'timed';

  return (
    <div className="topic-group">
      <div className="topic-group-header">
        <h3 className="topic-group-title">{group}</h3>
        {showSelectAll && topics.length > 0 && (
          <button className="select-all-btn" onClick={onSelectAll}>
            Select all in my exam
          </button>
        )}
      </div>
      
      <div className="topic-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            accuracy={topic.accuracy}
            isSelected={selectedTopics.includes(topic.id)}
            onToggle={() => onTopicToggle(topic.id)}
            showCheckbox={showCheckbox}
          />
        ))}
      </div>

      {topics.length === 0 && (
        <p className="no-topics">No topics available for your selected exam</p>
      )}
    </div>
  );
}
