import { useState, useMemo } from 'react';
import { useExam } from '../../context/ExamContext';
import { topics, topicGroups, getTopicsByExam } from '../../data/topics';
import { mockStats } from '../../data/mockStats';
import ModeSelector from '../../components/dashboard/ModeSelector';
import DifficultyChips from '../../components/dashboard/DifficultyChips';
import TopicGroup from '../../components/dashboard/TopicGroup';
import StartBar from '../../components/dashboard/StartBar';
import './Practice.css';

export default function Practice() {
  const { selectedExam } = useExam();
  const [mode, setMode] = useState('topic');
  const [difficulty, setDifficulty] = useState('easy');
  const [duration, setDuration] = useState(60);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [onlyMyExam, setOnlyMyExam] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter topics based on exam and search
  const filteredTopics = useMemo(() => {
    let filtered = topics;

    // Filter by exam if enabled
    if (onlyMyExam) {
      filtered = getTopicsByExam(selectedExam);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(topic => 
        topic.name.toLowerCase().includes(query)
      );
    }

    // Add accuracy from mock data
    return filtered.map(topic => ({
      ...topic,
      accuracy: mockStats.topicAccuracy[topic.id]
    }));
  }, [selectedExam, onlyMyExam, searchQuery]);

  // Group topics
  const groupedTopics = useMemo(() => {
    const grouped = {};
    topicGroups.forEach(group => {
      grouped[group] = filteredTopics.filter(topic => topic.group === group);
    });
    return grouped;
  }, [filteredTopics]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    // Reset selection when switching to topic-wise mode
    if (newMode === 'topic') {
      setSelectedTopics(selectedTopics.slice(0, 1));
    }
  };

  const handleTopicToggle = (topicId) => {
    if (mode === 'topic') {
      // Single selection for topic-wise mode
      setSelectedTopics([topicId]);
    } else {
      // Multiple selection for mixed and timed modes
      setSelectedTopics(prev => 
        prev.includes(topicId)
          ? prev.filter(id => id !== topicId)
          : [...prev, topicId]
      );
    }
  };

  const handleSelectAllInGroup = (group) => {
    const groupTopics = groupedTopics[group];
    const groupTopicIds = groupTopics.map(t => t.id);
    
    // Check if all topics in group are already selected
    const allSelected = groupTopicIds.every(id => selectedTopics.includes(id));
    
    if (allSelected) {
      // Deselect all in group
      setSelectedTopics(prev => prev.filter(id => !groupTopicIds.includes(id)));
    } else {
      // Select all in group
      const newSelection = new Set([...selectedTopics, ...groupTopicIds]);
      setSelectedTopics(Array.from(newSelection));
    }
  };

  return (
    <div className="practice-page">
      <div className="practice-header">
        <h1 className="practice-title">Practice</h1>
        <p className="practice-subtitle">
          Choose your mode, difficulty, and topics to start practicing
        </p>
      </div>

      <div className="practice-page-content">
        <div className="practice-controls">
          <ModeSelector
            mode={mode}
            onModeChange={handleModeChange}
            duration={duration}
            onDurationChange={setDuration}
          />

          <DifficultyChips
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />

          <div className="practice-toolbar">
            <label className="exam-filter">
              <input
                type="checkbox"
                checked={onlyMyExam}
                onChange={(e) => setOnlyMyExam(e.target.checked)}
              />
              <span>Only topics in my exam</span>
            </label>

            <div className="search-box">
              <svg 
                className="search-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
              >
                <circle 
                  cx="7" 
                  cy="7" 
                  r="5.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
                <path 
                  d="M11 11L14 14" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path 
                      d="M1 1L13 13M1 13L13 1" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="topics-section">
          {topicGroups.map(group => (
            <TopicGroup
              key={group}
              group={group}
              topics={groupedTopics[group]}
              selectedTopics={selectedTopics}
              onTopicToggle={handleTopicToggle}
              mode={mode}
              showSelectAll={mode !== 'topic'}
              onSelectAll={() => handleSelectAllInGroup(group)}
            />
          ))}
        </div>
      </div>

      <StartBar
        mode={mode}
        difficulty={difficulty}
        selectedTopics={selectedTopics}
        duration={duration}
      />
    </div>
  );
}
