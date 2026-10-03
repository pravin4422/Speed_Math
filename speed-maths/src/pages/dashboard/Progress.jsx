import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/dashboard/Topbar';
import Sidebar from '../../components/dashboard/Sidebar';
import BottomNav from '../../components/dashboard/BottomNav';
import TrendChart from '../../components/dashboard/TrendChart';
import TopicTable from '../../components/dashboard/TopicTable';
import { mockProgressData, mockWeakTopics } from '../../data/mockProgress';
import './Progress.css';

const RANGES = [7, 14, 30];

export default function Progress() {
  const navigate = useNavigate();
  const [range, setRange] = useState(7);

  // Filter data based on selected range
  const filteredData = useMemo(() => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - range);

    return {
      accuracyTrend: mockProgressData.accuracyTrend.filter(
        d => new Date(d.date) >= cutoffDate
      ),
      timeTrend: mockProgressData.timeTrend.filter(
        d => new Date(d.date) >= cutoffDate
      )
    };
  }, [range]);

  const handlePracticeTopic = (topic) => {
    // Navigate to practice mode with topic pre-selected
    navigate('/dashboard/home', { state: { selectedTopic: topic } });
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <div className="progress-page">
            <div className="page-header">
              <h1 className="page-title">Progress Tracker</h1>
            </div>

            {/* Range chips */}
            <div className="range-chips">
              {RANGES.map((r) => (
                <button
                  key={r}
                  className={`chip ${range === r ? 'active' : ''}`}
                  onClick={() => setRange(r)}
                >
                  {r} days
                </button>
              ))}
            </div>

            {/* Trend charts */}
            <div className="charts-grid">
              <TrendChart 
                data={filteredData.accuracyTrend}
                dataKey="accuracy"
                title="Accuracy Trend"
                unit="%"
                color="#10b981"
              />
              <TrendChart 
                data={filteredData.timeTrend}
                dataKey="avgTime"
                title="Average Time per Question"
                unit="s"
                color="#6366f1"
              />
            </div>

            {/* Weak topics section */}
            {mockWeakTopics.length > 0 && (
              <div className="weak-topics-section">
                <div className="section-header">
                  <h2 className="section-title">Topics Needing Attention</h2>
                  <p className="section-subtitle">Topics with accuracy below 60%</p>
                </div>
                <div className="weak-topics-grid">
                  {mockWeakTopics.map((topic, index) => (
                    <div key={index} className="weak-topic-card">
                      <div className="weak-topic-info">
                        <div className="weak-topic-name">{topic.topic}</div>
                        <div className="weak-topic-accuracy">
                          {topic.accuracy}% accuracy
                        </div>
                        <div className="weak-topic-meta">
                          {topic.attempts} attempts · {topic.avgTime}s avg
                        </div>
                      </div>
                      <button 
                        className="practice-button"
                        onClick={() => handlePracticeTopic(topic.topic)}
                      >
                        Practice
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Topic progress table */}
            <div className="section-header">
              <h2 className="section-title">All Topics Performance</h2>
            </div>
            <TopicTable topics={mockProgressData.topicProgress} />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
